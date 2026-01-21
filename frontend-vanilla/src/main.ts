import './styles/main.css';
import inputs from './inputs'
import handleSubmit from './submit'

async function insertHeaderBtns(){
  try {
    const response = await fetch('header_buttons.html');
    const html = await response.text();
    const navBtns = document.getElementById("nav-btns");
    if (navBtns) {
      navBtns.innerHTML = html;
    } else {
      console.warn('nav element for buttons missing!');
    }
  } catch (error) {
    console.error('Failed to fetch page: ', error);
  }
}

function hideForm(){
  const formContainer = document.getElementById("contact-form-container");
  if (formContainer){
    formContainer.style.display = "none";
  }else{
    console.warn('no form conteiner found!')
  }
}

function displayForm() {
  const formContainer = document.getElementById("contact-form-container");
  if (formContainer) {
    formContainer.style.display = "block";
  } else {
    console.warn('no form conteiner found!')
  }
}

async function initHeaderButtons(){
  await insertHeaderBtns();
  const newContactBtn = document.getElementById("new-contact-btn");
  if (!newContactBtn) {
    console.log("no newContactBtn")
  } else {
    newContactBtn.addEventListener("click", displayForm);
  }

  const contactListBtn = document.getElementById("contact-list-btn");
  if (!contactListBtn) {
    console.log("no contactListBtn")
  } else {
    contactListBtn.addEventListener("click", hideForm);
  }
}


// Wait until the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // const apiEndpoint = 'http://localhost:3333/api/contacts',
  initHeaderButtons();
  handleSubmit(inputs);
  
});



// TODO: Implementovat aplikaci pro správu kontaktů
//
// 1. Vytvořit formulář pro vytvoření kontaktu
// 2. Vytvořit seznam kontaktů
// 3. Implementovat zobrazení detailu kontaktu
// 4. Přidat možnost smazat kontakt
//
// API endpointy jsou dostupné na: http://localhost:3333/api/contacts
// Dokumentace API: http://localhost:3333/swagger

