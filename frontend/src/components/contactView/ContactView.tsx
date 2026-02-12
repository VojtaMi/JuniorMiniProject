import { useEffect, useState } from "react";
import { contactsApi } from "../../api/contactsApi";
import type { Contact } from "../../types/contact";
import type { AppStateProps } from "../../types/state";
import { ContactDetail } from "./ContactDetail";
import { ContactList } from "./ContactList";

export default function ContactView({
  selectedContact,
  setSelectedContact,
  setCurrentPage,
}: AppStateProps) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    let isActive = true;

    const loadContacts = async () => {
      try {
        setIsFetching(true);
        const data = await contactsApi.getAllContacts();
        if (isActive) {
          setContacts(data);
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
  }, []);

  return (
    <div className="list-view">
      <div className="list-panel">
        <ContactList
          contacts={contacts}
          error={error}
          isFetching={isFetching}
          onContactSelect={(contact) => {
            setSelectedContact(contact);
          }}
        />
      </div>
      <div className="detail-panel">
        <ContactDetail
          selectedContact={selectedContact}
          setContacts={setContacts}
          setCurrentPage={setCurrentPage}
          setSelectedContact={setSelectedContact}
        />
      </div>
    </div>
  );
}
