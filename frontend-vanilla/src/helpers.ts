
// resolves error element via aria-describedby, then falls back to `${input.id}-error`
export function getErrorElement(input: HTMLInputElement): HTMLElement | null {
  const describedBy = input.getAttribute('aria-describedby');
  if (describedBy) {
    const byAria = document.getElementById(describedBy);
    if (byAria instanceof HTMLElement) return byAria;
    console.warn(
      `Error element with id="${describedBy}" not found for input#${input.id || '(no id)'}`
    );
  }
  return null;
}

// Debounce utility to delay validation while typing
// MS Copilot generated, works as expected, but I do not understand it fully yet
export function debounce<T extends (...args: any[]) => void>(fn: T, delay = 300) {
  let timer: number | undefined;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = window.setTimeout(() => fn(...args), delay);
  };
}

export function cutDateToYYYYMMDD(dateStr: string): string {
  if (dateStr){
    return dateStr.slice(0, 10);;
  }
  else{
    return "";
  }
} 

export const FORM_CONTAINER = document.getElementById("contact-form");
if (FORM_CONTAINER === null) {
  console.warn('#contact-form-container not found')
}

export const FORM = document.getElementById("contact-form") as HTMLFormElement | null;
if (FORM === null) {
  console.warn('#contact-form not found')
}