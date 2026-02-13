import { useEffect, useState } from "react";
import { contactsApi } from "../../api/contactsApi";
import type { Contact } from "../../types/contact";

interface UseCreateContactsResult {
  fetchedContact: Contact;
  error: string | null;
  isFetching: boolean;
}

export function useCreateContact(
  contactData: Contact
): UseCreateContactsResult {
  const [fetchedContact, setFetchedContact] = useState<Contact>({firstName:'', lastName:'', email:''});
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    let isActive = true;

    const loadContacts = async () => {
      try {
        setIsFetching(true);
        const data = await contactsApi.createContact(contactData);
        if (isActive) {
          setFetchedContact(data);
        }
      } catch {
        if (isActive) {
          setError("Nepodařilo se načíst data.");
        }
      } finally {
        if (isActive) {
          setIsFetching(false);
        }
      }
    };

    loadContacts();

    return () => {
      isActive = false;
    };
  }, [contactData]);

  return { fetchedContact, error, isFetching };
}
