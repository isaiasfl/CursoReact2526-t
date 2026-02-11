import { createContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';
import { contactsAPI } from '../services/api';
import type { Contact, CreateContactDTO, UpdateContactDTO } from '../types';

/**
 * Context para manejar el estado global de contactos
 * Incluye funciones para CRUD y estado de loading/error
 */

export interface ContactsContextType {
  contacts: Contact[];
  loading: boolean;
  error: string | null;
  fetchContacts: () => Promise<void>;
  createContact: (data: CreateContactDTO) => Promise<Contact | null>;
  updateContact: (id: number, data: UpdateContactDTO) => Promise<Contact | null>;
  deleteContact: (id: number) => Promise<boolean>;
}

export const ContactsContext = createContext<ContactsContextType | undefined>(undefined);

export function ContactsProvider({ children }: { children: ReactNode }) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Obtener todos los contactos
  const fetchContacts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await contactsAPI.getAll();
      setContacts(data.contacts);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al cargar contactos';
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  // Crear contacto
  const createContact = async (data: CreateContactDTO): Promise<Contact | null> => {
    try {
      const response = await contactsAPI.create(data);
      setContacts((prev) => [response.contact, ...prev]);
      toast.success(response.message || 'Contacto creado');
      return response.contact;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al crear contacto';
      toast.error(message);
      return null;
    }
  };

  // Actualizar contacto
  const updateContact = async (id: number, data: UpdateContactDTO): Promise<Contact | null> => {
    try {
      const response = await contactsAPI.update(id, data);
      setContacts((prev) =>
        prev.map((c) => (c.id === id ? response.contact : c))
      );
      toast.success(response.message || 'Contacto actualizado');
      return response.contact;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al actualizar contacto';
      toast.error(message);
      return null;
    }
  };

  // Eliminar contacto
  const deleteContact = async (id: number): Promise<boolean> => {
    try {
      const response = await contactsAPI.delete(id);
      setContacts((prev) => prev.filter((c) => c.id !== id));
      toast.success(response.message || 'Contacto eliminado');
      return true;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al eliminar contacto';
      toast.error(message);
      return false;
    }
  };

  // Cargar contactos al montar el componente
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        loading,
        error,
        fetchContacts,
        createContact,
        updateContact,
        deleteContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
}

