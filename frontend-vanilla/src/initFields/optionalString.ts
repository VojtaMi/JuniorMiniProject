import type { FieldAdapter } from './types';

export function initOptionalString(selector: string): FieldAdapter {
    const input = document.querySelector<HTMLInputElement| HTMLTextAreaElement>(selector);

    if (!input) {
        console.warn(`Name input (${selector}) not found.`);
        return {
            isValid: () => true,
            getValue: () => '',
        };
    }

    const getValue = (): string => {
        // Return normalized (trimmed) value if valid; otherwise empty string
        const trimmed = input.value.trim();
        return trimmed;
    };

    return { isValid: () => true, getValue };
}

export function initCity(): FieldAdapter {
    return initOptionalString('#city');
}
export function initStreet(): FieldAdapter {
    return initOptionalString('#street');
}
export function initNote(): FieldAdapter {
    return initOptionalString('#note');
}