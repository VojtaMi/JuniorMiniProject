import type { FC } from "react";
import type { Contact, Page } from "../../types/contact";

interface ContactDetailProps {
  contact: Contact | null;
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
  setSelectedContact: React.Dispatch<React.SetStateAction<Contact | null>>;
}

export const ContactDetail: FC<ContactDetailProps> = ({
  contact,
  setCurrentPage,
  setSelectedContact,
}) => {
  // TODO: Implementovat detail kontaktu:
  //
  // 1. Zobrazit všechny informace o kontaktu
  //    - Jméno a příjmení
  //    - Email
  //    - Pohlaví
  //    - Telefon
  //    - Poznámka
  //    - Adresa (město, ulice, číslo popisné, PSČ)
  //    - Datum narození
  //
  // 2. Styling pomocí CSS/SCSS
  //
  // 3. Pokud contact je null, zobrazit výzvu k výběru kontaktu
  //
  // Bonusový úkol:
  // - Tlačítko "Editovat" které otevře formulář s předvyplněnými daty

  if (!contact) {
    return (
      <div>
        <p>Vyberte kontakt ze seznamu pro zobrazení detailu</p>
      </div>
    );
  }

  function handleUpdate() {
    setSelectedContact(contact);
    setCurrentPage("form");
  }

  function handleDelete() {
    // remove contact from DOM - from contact list
    // setSelectedContact(null);
    // call API delete
    // if error, rollback (restore DOM)
  }

  return (
    <div className="contact-detail-card">
      <h2>Detail kontaktu</h2>
      <table className="contact-detail">
        <tbody>
          <tr>
            <td>Vybraný kontakt:</td>
            <td>
              {contact.firstName} {contact.lastName}
            </td>
          </tr>
          <tr>
            <td>E-mail:</td>
            <td>{contact.email}</td>
          </tr>
        </tbody>
      </table>
      <div className="contact-detail-buttons">
        <button className="update-btn" onClick={handleUpdate} type="button">
          Upravit
        </button>
        <button className="delete-btn" onClick={handleDelete} type="button">
          Smazat
        </button>
      </div>
    </div>
  );
};
