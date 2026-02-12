import type { FC } from "react";
import type { Contact, OnContactSelect } from "../types/contact";

interface ContactSelectProps {
  contact: Contact;
  onContactSelect: OnContactSelect;
}

const ContactSelect: FC<ContactSelectProps> = ({
  contact,
  onContactSelect,
}) => {
  return (
    <li>
      <button onClick={() => onContactSelect(contact)} type="button">
        {contact.firstName} {contact.lastName}
      </button>
    </li>
  );
};

export default ContactSelect;
