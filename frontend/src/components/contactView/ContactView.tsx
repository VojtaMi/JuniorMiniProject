import type { Contact, Page } from "../../types/contact";
import { ContactDetail } from "./ContactDetail";
import { ContactList } from "./ContactList";

interface ContactViewProps {
  selectedContact: Contact | null;
  setSelectedContact: React.Dispatch<React.SetStateAction<Contact | null>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
}

export default function ContactView({
  selectedContact,
  setSelectedContact,
  setCurrentPage,
}: ContactViewProps) {
  return (
    <div className="list-view">
      <div className="list-panel">
        <ContactList
          onContactSelect={(contact) => {
            setSelectedContact(contact);
          }}
        />
      </div>
      <div className="detail-panel">
        <ContactDetail
          contact={selectedContact}
          setCurrentPage={setCurrentPage}
          setSelectedContact={setSelectedContact}
        />
      </div>
    </div>
  );
}
