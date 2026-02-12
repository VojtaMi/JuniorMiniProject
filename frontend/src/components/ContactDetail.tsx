import type { FC } from "react";
import type { Contact } from "../types/contact";

interface ContactDetailProps {
  contact: Contact | null;
}

export const ContactDetail: FC<ContactDetailProps> = ({ contact }) => {
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
        <button className="update-btn" type="button">
          Upravit
        </button>
        <button className="delete-btn" type="button">
          Smazat
        </button>
      </div>
    </div>
  );
};
