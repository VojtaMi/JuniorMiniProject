import './styles/main.css';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css'; // phone library plugin CSS


document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector<HTMLInputElement>('#phone');
  const errorMsg = document.querySelector('#phone-error');

  if (input) {
    const iti = intlTelInput(input, {
      initialCountry: 'cz',
      loadUtils: () => import('intl-tel-input/utils'),
    });

    iti.promise.then(() => {
      input.addEventListener('blur', () => {
        const isValid = iti.isValidNumber();
        if (errorMsg) {
          errorMsg.textContent = isValid ? '' : 'Please enter a valid phone number';
        }
      });

      input.addEventListener('countrychange', () => {
        const isValid = iti.isValidNumber();
        if (errorMsg) {
          errorMsg.textContent = isValid ? '' : 'Please enter a valid phone number';
        }
      });
    });
  }
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

