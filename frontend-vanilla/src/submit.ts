import { sendHttpRequest } from './apiComm'
// the function will submit contact on submit event
// submits if the form passes the validity
export default function handleSubmit(root: ParentNode, inputs: Record<string, () => string>) {
    root.addEventListener('submit', event => {
        event.preventDefault();
        for (const input in inputs) {
            console.log(`${input}: ${inputs[input]()}`);
        }
        const contact = {
            firstName: inputs.getFirstName(),
            lastName: inputs.getLastName(),
            email: inputs.getEmail(),
            phone: inputs.getPhone(),
            note: inputs.getNote(),
            gender: inputs.getGender(),
            city: inputs.getCity(),
            street: inputs.getStreet(),
            houseNumber: inputs.getHouseNumber(),
            zipCode: inputs.getZipCode(),
            birthDate: inputs.getBirthDate(),
        };
        sendHttpRequest("POST", contact)
    });
}
