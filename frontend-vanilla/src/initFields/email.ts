import { z } from 'zod';
import { getErrorElement, debounce } from '../helpers';

export default function initEmail() {
    const input = document.querySelector<HTMLInputElement>('#email');
    if (!input) return null;

    const errorMsg = getErrorElement(input);
    const emailSchema = z.email('Please enter a valid email address');

    let errorShown = false;


    const validate = (value: string) => {
        const result = emailSchema.safeParse(value);
        if (!result.success) {
            const msg = result.error.issues[0]?.message ?? 'Invalid email';
            if (errorMsg) errorMsg.textContent = msg;
            errorShown = true;
            return false;
        }
        if (errorMsg) errorMsg.textContent = '';
        errorShown = false;
        return true;
    };


    const updateError = () => validate(input.value);

    const onInput = debounce(() => {
        if (errorShown) updateError();
    });

    input.addEventListener('blur', updateError);
    input.addEventListener('input', onInput);

    const isValid = () => validate(input.value);
    const getValue = () => {
        const val = input.value.trim().toLowerCase();
        return emailSchema.safeParse(val).success ? val : null;
    };

    return {
        isValid,
        getValue,
    } as {
        isValid: () => boolean;
        getValue: () => string | null;
    };
}
