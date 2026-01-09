import './styles/main.css';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css'; // phone library plugin CSS



// Wait until the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Get the phone input element
  const input = document.querySelector<HTMLInputElement>('#phone');
  if (!input) return;

  // Find the error message element for this input
  const errorMsg = getErrorElement(input);

  // Initialize intl-tel-input for phone validation
  const iti = intlTelInput(input, {
    initialCountry: 'cz',
    loadUtils: () => import('intl-tel-input/utils'),
  });

  let errorShown = false; // Track if an error is currently displayed

  // Update error message based on validity
  const updateError = () => {
    const isValid = iti.isValidNumber();
    if (errorMsg) {
      errorMsg.textContent = isValid ? '' : 'Please enter a valid phone number';
    }
    errorShown = !isValid;
  };

  // Attach validation events after plugin is ready
  iti.promise.then(() => {
    input.addEventListener('blur', updateError); // Validate on blur
    input.addEventListener('countrychange', updateError); // Validate on country change
    input.addEventListener('input', debounce(() => {
      if (errorShown) updateError(); // Validate on input only if error was shown
    }));
  });
});


// -------------------- Helpers --------------------

// Find the error element inside the closest wrapper
function getErrorElement(input: HTMLInputElement): HTMLElement | null {
  const wrapper = input.closest('.form-group');
  const el = wrapper?.querySelector('.error') ?? null;
  return el instanceof HTMLElement ? el : null;
}

// Debounce utility to delay validation while typing
// MS Copilot generated, works as expected, but I do not understand it fully yet
function debounce<T extends (...args: any[]) => void>(fn: T, delay = 300) {
  let timer: number | undefined;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = window.setTimeout(() => fn(...args), delay);
  };
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

console.log('Vanilla TypeScript frontend připraven k implementaci!');


const app = document.getElementById('app');

if (app) {

}

