import type { FC } from "react";
import { useInput } from "../hooks/useInput";
import type { Contact } from "../types/contact";
import { formSchema } from "../utils/validators";
import FormInput from "./FormInput";

interface ContactFormProps {
  onSubmit: (contact: Omit<Contact, "_id" | "create_date">) => void;
  initialData?: Contact;
}

export const ContactForm: FC<ContactFormProps> = ({
  onSubmit,
  initialData,
}) => {
  // TODO: Implementovat formulář s těmito prvky:
  //
  // Povinná pole:
  // - firstName (text input)
  // - lastName (text input)
  // - email (email input)
  //
  // Radio buttons pro pohlaví:
  // - gender (mužské/ženské/jiné)
  //
  // Volitelná pole:
  // - phone (tel input)
  // - note (textarea)
  // - city (text input)
  // - street (text input)
  // - houseNumber (text input)
  // - zipCode (number input)
  // - birthDate (date input) - hezky naformátované
  //
  // Funkcionality:
  // - Validace (povinná pole, validní email)
  // - Zobrazení chybových hlášek
  // - Styling pomocí CSS/SCSS
  //
  // Bonusové úkoly:
  // - Loading indikátor při odesílání
  // - Zobrazení úspěšné/chybové hlášky po odeslání
  //
  // Použití:
  // - Použít připravený contactsApi.createContact() nebo contactsApi.updateContact()
  // - Pro přístup k API klientu: import { contactsApi } from '../api/contactsApi'

  const emailProps = useInput(initialData, "email", formSchema.shape.email);
  const firstNameProps = useInput(
    initialData,
    "firstName",
    formSchema.shape.nonEmpty
  );
  const secondNameProps = useInput(
    initialData,
    "lastName",
    formSchema.shape.nonEmpty
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{initialData ? "Editace kontaktu" : "Nový kontakt"}</h2>

      <FormInput
        formprops={firstNameProps}
        id="firstName"
        label="Jméno"
        name="firstName"
        required
        type="text"
      />

      <FormInput
        formprops={secondNameProps}
        id="lastName"
        label="Příjmení"
        name="lastName"
        required
        type="text"
      />

      <FormInput
        formprops={emailProps}
        id="email"
        label="E-mail"
        name="email"
        required
        type="email"
      />

      <button className="submit-btn">
        {initialData ? "Potvrdit změny" : "Přidat kontakt"}
      </button>
    </form>
  );
};
