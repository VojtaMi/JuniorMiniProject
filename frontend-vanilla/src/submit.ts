
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
    form.addEventListener('submit', event => {
        event.preventDefault();
        console.log("first name: " + firstName());
        console.log("last name: " + lastName());
        console.log("email: " + email());
        console.log("gender: " + gender());
        console.log("birth date: " + birthDate());
        console.log("phone: " + phone());
        console.log("city: " + city());
        console.log("street: " + street());
        console.log("house number: " + houseNumber());
        console.log("ZIP code: " + zipCode());
        console.log("note: " + note());
    })
}
