import './styles/main.css';
import { initializeInputFields } from './inputs'
import { sendHttpRequest } from './apiComm'
import handleSubmit from './submit'

const FORM_CONTAINER = document.getElementById("contact-form-container");
if (FORM_CONTAINER === null){
  console.warn('#contact-form-container not found')
}

const CONTACTS_LIST = document.getElementById("contacts-list");
if (CONTACTS_LIST === null) {
  console.warn('#contact-list not found')
}

const CONTACT_TPL = document.getElementById("contact-item-tpl") as HTMLTemplateElement|null;
if (CONTACT_TPL === null) {
  console.warn('#contact-tpl not found')
}

function hideForm() {
    if (FORM_CONTAINER) {
      FORM_CONTAINER.style.display = "none";
    }
}

function displayForm() {
  if (FORM_CONTAINER) {
    FORM_CONTAINER.style.display = "block";
  }
}

// async function displayContactList(contacts: Array<Record<string, any>>) {
//   if (CONTACTS_LIST) {
//     CONTACTS_LIST.style.display = "block";
//     CONTACTS_LIST.innerHTML = "";
//     // Vyrenderovat seznam pomocí DOM manipulace
//     contacts.forEach(contact => {
//       const li = document.createElement('li');
//       li.textContent = `${contact.firstName} ${contact.lastName}`;
//       li.addEventListener('click', () => {
//         // TODO: Zobrazit detail
//       });
//       CONTACTS_LIST.appendChild(li);
//     });
//   } 
// }



async function displayContactList(contacts: Array<Record<string, any>>) {
  if (CONTACTS_LIST && CONTACT_TPL){
    CONTACTS_LIST.innerHTML = "";

    contacts.forEach(contact => {
      // 1. Create a deep clone of the <template>
      const node = CONTACT_TPL.content.cloneNode(true) as DocumentFragment;

      const summary = node.querySelector("summary")!;
      const emailField = node.querySelector(".field-email")!;

      const fullName = `${contact.firstName} ${contact.lastName}`;

      summary.textContent = fullName;
      emailField.textContent = contact.email;

      // 3. Append to list
      CONTACTS_LIST.appendChild(node);
    });

  }
}


function hideContactList() {
  if (CONTACTS_LIST !== null) {
    CONTACTS_LIST.style.display = "none";
  }
}

async function displayContatPage() {
  hideForm();
  try{
    const response = await sendHttpRequest("GET");
    const data = response.data;
    displayContactList(data);
  } catch (error) {
    console.error('Failed to fetch page: ', error);
    alert(error);
  }
}

function displayFormPage() {
  hideContactList();
  displayForm();
}

async function initHeaderButtons() {
  const newContactBtn = document.getElementById("new-contact-btn");
  if (!newContactBtn) {
    console.warn("no newContactBtn")
  } else {
    newContactBtn.addEventListener("click", displayFormPage);
  }

  const contactListBtn = document.getElementById("contact-list-btn");
  if (!contactListBtn) {
    console.warn("no contactListBtn")
  } else {
    contactListBtn.addEventListener("click", displayContatPage);
  }
}
//---------------------------------------------------------------------------------------------
initHeaderButtons();
const formHtmlElement = document.querySelector('#contact-form') as HTMLFormElement | null;
if (!formHtmlElement) {
  console.warn('Form #contact-form not found.');
} else {
  const inputs = initializeInputFields(formHtmlElement);
  handleSubmit(formHtmlElement, inputs);
}




// TODO: Implementovat aplikaci pro správu kontaktů
//
// 1. Vytvořit formulář pro vytvoření kontaktu
// 2. Vytvořit seznam kontaktů
// 3. Implementovat zobrazení detailu kontaktu
// 4. Přidat možnost smazat kontakt
//
// API endpointy jsou dostupné na: http://localhost:3333/api/contacts
// Dokumentace API: http://localhost:3333/swagger

