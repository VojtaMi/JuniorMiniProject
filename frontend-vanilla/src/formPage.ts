import { hideContactList } from './contactPage'
import { Contact } from './types'
import { cutDateToYYYYMMDD } from './helpers'

const FORM_CONTAINER = document.getElementById("contact-form-container");
if (FORM_CONTAINER === null) {
  console.warn('#contact-form-container not found')
}
const FORM = FORM_CONTAINER?.querySelector('#contact-form') as HTMLFormElement | null;


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
  hideUpdateButton();
  displayAddButton();
  if (FORM){
    FORM.reset();
  }
  displayForm();
}

function  setInputValue(inputId: string, value: string) {
  if (value){
    if (FORM_CONTAINER) {
      const inputElement = FORM_CONTAINER.querySelector(`#${inputId}`) as HTMLInputElement;
      if (inputElement) {
        inputElement.value = value;
      }
    }
  }
}

function hideAddButton(){
  const addBtn = document.getElementById("add-btn");
  if (addBtn){
    addBtn.style.display = "none";
  }
}

function hideUpdateButton() {
  const addBtn = document.getElementById("update-btn");
  if (addBtn) {
    addBtn.style.display = "none";
  }
}

function displayAddButton() {
  const addBtn = document.getElementById("add-btn");
  if (addBtn) {
    addBtn.style.display = "block";
  }
}

function displayUpdateButton() {
  const addBtn = document.getElementById("update-btn");
  if (addBtn) {
    addBtn.style.display = "block";
  }
}

export function fillFromSaved(contact: Contact) {
  hideAddButton();
  displayUpdateButton();

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
