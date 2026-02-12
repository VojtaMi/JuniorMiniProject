import type { Dispatch, SetStateAction } from "react";
import type { Contact, Page } from "./contact";

export interface AppStateProps {
  currentPage: Page;
  setCurrentPage: Dispatch<SetStateAction<Page>>;
  selectedContact: Contact | null;
  setSelectedContact: Dispatch<SetStateAction<Contact | null>>;
}
