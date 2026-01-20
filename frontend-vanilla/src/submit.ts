
export default function submitContact(inputs: Record<string, ()=>string>) {
    const form = document.querySelector('#contact-form') as HTMLFormElement | null;

    if (!form) {
        console.warn('Form #contact-form not found.');
        return;
    }
    form.addEventListener('submit', event => {
        event.preventDefault();
        for (const input in inputs){
            console.log(`${input}: ${inputs[input]()}`);
        }
    })
}
