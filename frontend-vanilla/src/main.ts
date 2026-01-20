import './styles/main.css';
import initPhone from './initFields/phone';
import initEmail from './initFields/email';
import initGender from './initFields/gender';
import {initFirstName, initLastName} from './initFields/notEmpty';
import {initCity, initStreet, initNote} from './initFields/optionalString';
import initHouseNumber from './initFields/houseNumber';
import initZipCode from './initFields/zipCode';
import initBirthDate from './initFields/birthDate';
import submitContact from './submit'



// Wait until the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const firstName = initFirstName();
  const lastName = initLastName();
  const email = initEmail();
  const gender = initGender();
  const birthDate = initBirthDate();
  const phone = initPhone();
  const city = initCity();
  const street = initStreet();
  const houseNumber = initHouseNumber();
  const zipCode = initZipCode();
  const note = initNote();
  

  // const apiEndpoint = 'http://localhost:3333/api/contacts',
  submitContact(firstName, lastName, email, gender, birthDate, phone, city, street, houseNumber, zipCode, note);
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


const app = document.getElementById('app');

if (app) {

}

