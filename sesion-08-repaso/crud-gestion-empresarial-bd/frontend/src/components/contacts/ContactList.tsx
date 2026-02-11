import { useContacts } from '../../hooks/useContacts';
import ContactCard from './ContactCard';

/**
 * Lista de contactos
 * Muestra todos los contactos usando ContactCard
 */
export default function ContactList() {
  const { contacts, loading } = useContacts();

  if (loading) {
    return <div className="p-8 text-center">Cargando contactos...</div>;
  }

  if (contacts.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        No hay contactos. ¡Crea el primero!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
}
