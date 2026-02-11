import { useContext } from 'react';
import { ContactsContext } from '../contexts/ContactsContext';

/**
 * Hook personalizado para acceder al contexto de contactos
 * Lanza error si se usa fuera del ContactsProvider
 */
export function useContacts() {
  const context = useContext(ContactsContext);
  if (!context) {
    throw new Error('useContacts debe usarse dentro de ContactsProvider');
  }
  return context;
}
