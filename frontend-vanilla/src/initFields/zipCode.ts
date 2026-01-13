
import { z } from 'zod';
import { getErrorElement, debounce } from '../helpers';
import type { FieldAdapter } from './types';

const zipCodeRegex = /^\d{3}[\s/-]?\d{2}$/;

const zipCodeSchema = z
  .string()
  .trim()
  .min(1, 'ZIP code is required')
  .regex(zipCodeRegex, 'Use formats like "407 50" or "40750"');

const normalizeZip = (zipInput: string) => zipInput.replace(/\D+/g, "");

export default function initZip(): FieldAdapter {
  const input = document.querySelector<HTMLInputElement>('#zipCode');

  if (!input) {
    console.warn('Zip code input (#zipCode) not found.');
    return { isValid: () => false, getValue: () => '' };
  }

  const errorEl = getErrorElement(input);
  let errorShown = false;

  const validate = (value: string): boolean => {
    const result = zipCodeSchema.safeParse(value);
    if (!result.success) {
      const msg = result.error.issues[0]?.message ?? 'Invalid ZIP code';
      if (errorEl) errorEl.textContent = msg;
      errorShown = true;
      return false;
    }
    if (errorEl) errorEl.textContent = '';
    errorShown = false;
    return true;
  };

  const updateError = () => validate(input.value);
  const onInput = debounce(() => { if (errorShown) updateError(); });

  input.addEventListener('blur', updateError);
  input.addEventListener('input', onInput);

  return {
    isValid: () => validate(input.value),
    getValue: () => {
      const val = normalizeZip(input.value);
      return zipCodeSchema.safeParse(val).success ? val : '';
    },
  };
}
