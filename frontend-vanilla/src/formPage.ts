import { hideContactList } from './contactPage'
import { Contact } from './types'
import { cutDateToYYYYMMDD } from './helpers'
import { FORM, FORM_CONTAINER } from './helpers';

const SUBMIT_BTN = document.getElementById("submit-btn");


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
  nameSubmitButton("Add");
  hideContactList();
  if (FORM) {
    FORM.reset();
  }
  displayForm();
}

function setInputValue(inputId: string, value: string) {
  if (value) {
    if (FORM_CONTAINER) {
      const inputElement = FORM_CONTAINER.querySelector(`#${inputId}`) as HTMLInputElement;
      if (inputElement) {
        inputElement.value = value;
      }
    }
  }
}

function nameSubmitButton(operationType: string) {
  if (SUBMIT_BTN) {
    SUBMIT_BTN.textContent = operationType + " Contact";
  }
}

export function fillFromSaved(contact: Contact) {
  nameSubmitButton("Update");
  FORM?.setAttribute("data-contact-id", contact._id);

  if (FORM_CONTAINER) {
    if (FORM) {
      FORM.reset();
    }
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

    const genderInput = FORM_CONTAINER.querySelector(
      `input[name="gender"][value="${contact.gender}"]`
    ) as HTMLInputElement | null;
    if (genderInput) {
      genderInput.checked = true;
    }
  }
}
