import { useState } from "react";
import { ZodType } from "zod";
import { UseInputReturn } from "../types/input";
import { Contact } from "../types/contact";

function findDefaultValue(prefilledInputs: Contact | undefined, inputType: keyof Contact){
    return prefilledInputs ? String(prefilledInputs[inputType]) : ''
}

export function useInput(
    prefilledInputs: Contact | undefined,
    inputType: keyof Contact,
    schema: ZodType
): UseInputReturn {
    const defaultValue = findDefaultValue(prefilledInputs, inputType)
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const parsed = schema.safeParse(enteredValue);
    const valueIsValid = parsed.success;
    const latentErrorMsg = valueIsValid
        ? ''
        : parsed.error.issues[0]?.message ?? 'Špatný vstup';
    const displayedErrorMessage = (didEdit && !valueIsValid) ? latentErrorMsg : '';

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEnteredValue(event.target.value);
        setDidEdit(false);
    }

    function handleInputBlur() {
        setDidEdit(true);
    }

    return {
        value: enteredValue,
        handleInputChange,
        handleInputBlur,
        errorMsg: displayedErrorMessage
    };
}
