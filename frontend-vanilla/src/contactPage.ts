import { sendHttpRequest } from './apiComm'
import { hideForm } from './formPage'

const CONTACTS_LIST = document.getElementById("contacts-list");
if (CONTACTS_LIST === null) {
    console.warn('#contact-list not found')
}

const CONTACT_TPL = document.getElementById("contact-item-tpl") as HTMLTemplateElement | null;
if (CONTACT_TPL === null) {
    console.warn('#contact-tpl not found')
}

async function displayContactList(contacts: Array<Record<string, any>>) {
    if (CONTACTS_LIST && CONTACT_TPL) {
        CONTACTS_LIST.innerHTML = "";
        CONTACTS_LIST.style.display = "block";

        contacts.forEach(contact => {
            // 1. Create a deep clone of the <template>
            const node = CONTACT_TPL.content.cloneNode(true) as DocumentFragment;

            const li = node.querySelector('li') as HTMLLIElement;
            const summary = node.querySelector("summary")!;
            const emailField = node.querySelector(".field-email")!;

            const fullName = `${contact.firstName} ${contact.lastName}`;

            summary.textContent = fullName;
            emailField.textContent = contact.email;



            li.addEventListener('click', (e) => {
                const target = e.target as HTMLElement;

                // 1) Let native behavior work if clicking <summary>
                if (target.closest('summary')) return;

                // 2) Ignore when user is selecting text
                const sel = window.getSelection();
                if (sel && !sel.isCollapsed) {
                    const { anchorNode, focusNode } = sel;
                    if ((anchorNode && li.contains(anchorNode)) || (focusNode && li.contains(focusNode))) {
                        return;
                    }
                }

                // 3) Ignore clicks on buttons
                if (target.closest('button')) return;

                // 4) Otherwise, toggle
                summary.click();
            });



            // 3. Append to list
            CONTACTS_LIST.appendChild(node);
        });

    }
}


export function hideContactList() {
    if (CONTACTS_LIST !== null) {
        CONTACTS_LIST.style.display = "none";
    }
}

export async function displayContatPage() {
    hideForm();
    try {
        const response = await sendHttpRequest("GET");
        const data = response.data;
        displayContactList(data);
    } catch (error) {
        console.error('Failed to fetch page: ', error);
        alert(error);
    }
}