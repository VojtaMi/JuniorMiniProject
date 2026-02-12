import type { FC } from "react";
import { useEffect, useState } from "react";
import { contactsApi } from "../../api/contactsApi";
import type { Contact, OnContactSelect } from "../../types/contact";
import ContactSelect from "./ContactSelect";

interface ContactListProps {
  onContactSelect: OnContactSelect;
}

export const ContactList: FC<ContactListProps> = ({ onContactSelect }) => {
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
    <div>
      <h2>Seznam kontaktů</h2>
      {error && <p className="state-error">{error}</p>}
      {isFetching && <p>Načítám data kontaktů.</p>}
      {contacts.length > 0 && (
        <ul className="contact-list">
          {contacts.map((contact) => (
            <ContactSelect
              contact={contact}
              key={contact._id}
              onContactSelect={onContactSelect}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

// TODO: Implementovat seznam kontaktů:
//
// 1. Načíst všechny kontakty pomocí contactsApi.getAllContacts()
//    - použít useEffect pro načtení při mount komponenty
//    - použít useState pro uložení kontaktů
//
// 2. Zobrazit seznam jmen kontaktů
//    - Zobrazit firstName a lastName
//    - Při kliknutí na jméno zavolat onContactSelect
//
// 3. Tlačítko "Smazat" u každého kontaktu
//    - Při kliknutí zavolat contactsApi.deleteContact(id)
//    - Po smazání znovu načíst seznam
//
// 4. Styling pomocí CSS/SCSS
//
// 5. Error handling:
//    - Loading stav během načítání
//    - Zobrazení chybové hlášky při selhání
//
// Použití API klientu:
// import { contactsApi } from '../api/contactsApi'
