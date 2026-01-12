import './styles/main.css';
import initPhone from './initFields/phone';
import initEmail from './initFields/email';
import submitContact from './submit'



// Wait until the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const phoneAdapter = initPhone();
  const emailAdapter = initEmail();

  // const apiEndpoint = 'http://localhost:3333/api/contacts',
  submitContact(phoneAdapter,emailAdapter);
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

console.log('Vanilla TypeScript frontend připraven k implementaci!');


const app = document.getElementById('app');

if (app) {

}

