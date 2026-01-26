import { sendHttpRequest } from './apiComm'
import { getErrorElement } from './helpers';
import { initializeInputFields } from './inputs'
import {FORM} from './helpers';

// the function will submit contact on submit event
// submits if the form passes the validity
export default function handleSubmit() {
    if (!FORM){
        return;
    }
    const inputs = initializeInputFields(FORM);
    FORM.addEventListener('submit', event => {
        event.preventDefault();
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

        function setSubmitMessage(submitMsgElement: HTMLElement | null, text: string, classToSet: string | null = null) {
            if (submitMsgElement) {
                submitMsgElement.textContent = text;
                if (classToSet) {
                    submitMsgElement.classList = classToSet;
                }
            }

        }

        let submitMsgElement: HTMLElement | null;
        const submitElement = FORM!.querySelector<HTMLInputElement>('#submit-btn');
        if (submitElement) {
            submitMsgElement = getErrorElement(submitElement);
        }

        const contactID = FORM!.getAttribute("data-contact-id") || '';
        const method = contactID ? "PATCH" : "POST";
        console.log("contactID " + contactID + " method " + method);

        if (method === "POST") {
            sendHttpRequest("POST", contact)
                .then((value) => {
                    // console.log(value.message);
                    setSubmitMessage(submitMsgElement, value.message, "success");
                    FORM!.reset();
                })
                .catch((err) => {
                    setSubmitMessage(submitMsgElement, err, "error");
                }
                )
                .finally(() => {
                    setTimeout(() => {
                        setSubmitMessage(submitMsgElement, "")
                    }, 3000);
                });
        }
        else if (method === "PATCH") {
            console.log("PATCH submit");
            sendHttpRequest("PATCH", contact, contactID)
                .then((value) => {
                    // console.log(value.message);
                    setSubmitMessage(submitMsgElement, value.message, "success");
                    FORM!.reset();
                })
                .catch((err) => {
                    setSubmitMessage(submitMsgElement, err, "error");
                }
                )
                .finally(() => {
                    setTimeout(() => {
                        setSubmitMessage(submitMsgElement, "")
                    }, 3000);
                });
        }
    });
}
