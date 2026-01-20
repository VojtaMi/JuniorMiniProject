
export default function submitContact(
    firstName: () => string, 
    lastName: () => string, 
    email: () => string, 
    gender: () => string,
    birthDate: () => string, 
    phone: () => string,
    city: () => string, 
    street: () => string, 
    houseNumber: () => string, 
    zipCode: () => string, 
    note: () => string) {
    const form = document.querySelector('#contact-form') as HTMLFormElement | null;

    if (!form) {
        console.warn('Form #contact-form not found.');
        return;
    }
}
