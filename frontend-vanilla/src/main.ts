import './styles/main.css';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css'; // phone library plugin CSS


document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector<HTMLInputElement>('#phone');
  if (!input) return;

  const errorMsg =
    input.nextElementSibling instanceof HTMLElement &&
    input.nextElementSibling.classList.contains('error')
      ? (input.nextElementSibling as HTMLElement)
      : input.closest('.field')?.querySelector<HTMLElement>('.error');

  const iti = intlTelInput(input, {
    initialCountry: 'cz',
    loadUtils: () => import('intl-tel-input/utils'),
  });

  let errorShown = false; // Track if error has been displayed

  const updateError = () => {
    const isValid = iti.isValidNumber();
    if (errorMsg) {
      errorMsg.textContent = isValid ? '' : 'Please enter a valid phone number';
    }
    errorShown = !isValid; // Update flag
  };

  iti.promise.then(() => {
    // Validate on blur
    input.addEventListener('blur', updateError);

    // Validate on country change
    input.addEventListener('countrychange', updateError);

    // Validate on input only if error was shown before
    let t: number | undefined;
    input.addEventListener('input', () => {
      if (!errorShown) return; // Skip until error triggered
      clearTimeout(t);
      t = window.setTimeout(updateError, 250);
    });
  });
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

