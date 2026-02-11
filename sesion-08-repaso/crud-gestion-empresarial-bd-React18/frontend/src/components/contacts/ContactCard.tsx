import { useState } from 'react';
import { useContacts } from '../../hooks/useContacts';
import type { Contact } from '../../types';

/**
 * Tarjeta individual de contacto
 * Muestra información y botones de editar/eliminar
 */
interface Props {
  contact: Contact;
}

export default function ContactCard({ contact }: Props) {
  const { deleteContact } = useContacts();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    const success = await deleteContact(contact.id);
    if (success) setShowConfirm(false);
  };

  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-white">
      <h3 className="font-bold text-lg mb-2">
        {contact.firstName} {contact.lastName}
      </h3>

      <p className="text-sm text-gray-500 mb-1">
        📧 {contact.email}
      </p>

      {contact.phone && (
        <p className="text-sm text-gray-500 mb-1">
          📞 {contact.phone}
        </p>
      )}

      {contact.position && (
        <p className="text-sm text-gray-500 mb-1">
          💼 {contact.position}
        </p>
      )}

      {contact.company && (
        <p className="text-sm text-blue-500 mb-1">
          🏢 {contact.company.name}
        </p>
      )}

      {contact.linkedin && (
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline"
        >
          🔗 LinkedIn
        </a>
      )}

      <div className="mt-4 flex gap-2">
        <button onClick={() => setShowConfirm(true)} className="btn btn-danger">
          Eliminar
        </button>
      </div>

      {showConfirm && (
        <div className="mt-4 p-3 bg-red-100 rounded">
          <p className="text-sm mb-2">
            ¿Eliminar {contact.firstName} {contact.lastName}?
          </p>
          <div className="flex gap-2">
            <button onClick={handleDelete} className="btn btn-danger">
              Sí, eliminar
            </button>
            <button onClick={() => setShowConfirm(false)} className="btn btn-secondary">
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
