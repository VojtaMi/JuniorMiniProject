import {hideContactList} from './contactPage'

const FORM_CONTAINER = document.getElementById("contact-form-container");
if (FORM_CONTAINER === null) {
    console.warn('#contact-form-container not found')
}


export function hideForm() {
  if (FORM_CONTAINER) {
    FORM_CONTAINER.style.display = "none";
  }
}

function displayForm() {
  if (FORM_CONTAINER) {
    FORM_CONTAINER.style.display = "block";
  }
}

export function displayFormPage() {
  hideContactList();
  displayForm();
}