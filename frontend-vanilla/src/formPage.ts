import { hideContactList } from './contactPage'
import { Contact } from './types'
import { cutDateToYYYYMMDD } from './helpers'

const FORM_CONTAINER = document.getElementById("contact-form-container");
if (FORM_CONTAINER === null) {
  console.warn('#contact-form-container not found')
}


export function hideForm() {
  if (FORM_CONTAINER) {
    FORM_CONTAINER.style.display = "none";
  }
}

export function displayForm() {
  if (FORM_CONTAINER) {
    FORM_CONTAINER.style.display = "block";
  }
}

export function displayFormPage() {
  hideContactList();
  displayForm();
}

function  setInputValue(inputId: string, value: string) {
  if (FORM_CONTAINER) {
    const inputElement = FORM_CONTAINER.querySelector(`#${inputId}`) as HTMLInputElement;
    if (inputElement) {
      inputElement.value = value; 
    }
  }
}

export function fillFromSaved(contact: Contact) {
  if (FORM_CONTAINER) {
    setInputValue("firstName", contact.firstName);
    setInputValue("lastName", contact.lastName);
    setInputValue("email", contact.email);
    setInputValue("phone", contact.phone);
    setInputValue("city", contact.city);
    setInputValue("street", contact.street);
    setInputValue("houseNumber", contact.houseNumber);
    setInputValue("zipCode", contact.zipCode);
    setInputValue("note", contact.note);
    setInputValue("birthDate", cutDateToYYYYMMDD(contact.birthDate));
  }
}