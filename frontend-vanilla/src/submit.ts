import { FieldAdapter } from './initFields/types';

function allInputsvalid(fields: FieldAdapter[]): boolean{
    return fields.every(f => f.isValid());
}

export default function submitContact(email: FieldAdapter, phone: FieldAdapter) {
  const form = document.querySelector('#contact-form') as HTMLFormElement | null;

  if (!form) {
    console.warn('Form #contact-form not found.');
    return;
  }

  const fields =  [email, phone];
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent page reload
    if (allInputsvalid(fields)){
        console.log(email.getValue() + " " + phone.getValue())
    }
    else{
        return;
    }
  });
}
