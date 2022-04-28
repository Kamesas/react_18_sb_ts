export function isValidForm(formData: any) {
  let isValid = true;

  for (const input in formData) {
    const currItem = input;
    const v = formData[currItem]?.checkValidation();
    if (v === false) isValid = false;
  }

  return isValid;
}