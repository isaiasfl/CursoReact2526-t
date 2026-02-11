import { useState, FormEvent } from 'react';
import { useContacts } from '../../hooks/useContacts';
import { useCompanies } from '../../hooks/useCompanies';
import type { CreateContactDTO } from '../../types';

/**
 * Formulario para crear un nuevo contacto
 * Permite seleccionar una empresa (opcional)
 */
export default function ContactForm() {
  const { createContact } = useContacts();
  const { companies } = useCompanies();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [companyId, setCompanyId] = useState<number | null>(null);
  const [linkedin, setLinkedin] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim()) return;

    setLoading(true);
    const data: CreateContactDTO = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      position: position.trim() || undefined,
      companyId: companyId || undefined,
      linkedin: linkedin.trim() || undefined,
      notes: notes.trim() || undefined,
    };

    const success = await createContact(data);
    if (success) {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setPosition('');
      setCompanyId(null);
      setLinkedin('');
      setNotes('');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-lg">
      <h2 className="text-xl font-bold mb-4">
        Nuevo Contacto
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 font-medium">
            Nombre *
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input"
            required
            placeholder="Juan"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Apellido *
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input"
            required
            placeholder="Pérez"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block mb-2 font-medium">
          Email *
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          required
          placeholder="juan@example.com"
        />
      </div>

      <div className="mt-4">
        <label className="block mb-2 font-medium">
          Teléfono
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="input"
          placeholder="+34 600 123 456"
        />
      </div>

      <div className="mt-4">
        <label className="block mb-2 font-medium">
          Cargo
        </label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="input"
          placeholder="Developer"
        />
      </div>

      <div className="mt-4">
        <label className="block mb-2 font-medium">
          Empresa
        </label>
        <select
          value={companyId || ''}
          onChange={(e) => setCompanyId(e.target.value ? Number(e.target.value) : null)}
          className="input"
        >
          <option value="">Sin empresa</option>
          {companies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label className="block mb-2 font-medium">
          LinkedIn
        </label>
        <input
          type="url"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          className="input"
          placeholder="https://linkedin.com/in/juan-perez"
        />
      </div>

      <div className="mt-4">
        <label className="block mb-2 font-medium">
          Notas
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="input"
          rows={3}
          placeholder="Notas adicionales..."
        />
      </div>

      <button type="submit" disabled={loading} className="btn btn-primary w-full mt-4">
        {loading ? 'Creando...' : 'Crear Contacto'}
      </button>
    </form>
  );
}
