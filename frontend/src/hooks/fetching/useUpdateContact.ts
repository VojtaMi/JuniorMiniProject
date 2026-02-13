import { useState } from "react";
import { contactsApi } from "../../api/contactsApi";
import type { Contact } from "../../types/contact";

interface UseUpdateContactResult {
  updateContact: (id: string, contactData: Contact) => Promise<Contact | null>;
  fetchedContact: Contact | null;
  error: string | null;
  isFetching: boolean;
};

export function useUpdateContact(): UseUpdateContactResult {
  const [fetchedContact, setFetchedContact] = useState<Contact | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const updateContact = async (
    id: string,
    contactData: Contact
  ): Promise<Contact | null> => {
    try {
      setIsFetching(true);
      setError(null);
      const data = await contactsApi.updateContact(id, contactData);
      setFetchedContact(data);
      return data;
    } catch {
      setError("Nepodařilo se upravit kontakt.");
      return null;
    } finally {
      setIsFetching(false);
    }
  };

  return { updateContact, fetchedContact, error, isFetching };
}