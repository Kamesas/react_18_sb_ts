export type validatorName = 'email' | 'userName' | "equalTo" | 'noToBeEmpty' | 'password' | 'zipCode';

type tIsValidInput = {
  value: string
  validators?: Array<validatorName>,
  equalTo?: string;
}

export const isValidInput = ({ value, validators, equalTo }: tIsValidInput) => {
  if (!validators) return { isValid: true, errorsTypes: [] };

  let isValid = false;
  const errorsTypes: Array<string> = [];

  for (const validator of validators) {
    if (validator === "noToBeEmpty") {
      isValid = !!value;
      setErrorTypes(validator);
    }
    if (validator === "email") {
      const re = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      isValid = !value ? true : re.test(value); //if value is empty set valid 
      setErrorTypes(validator);
    }
    if (validator === "userName") {
      if (!value) {
        isValid = true;
      } else {
        const lettersRx = new RegExp(/[^\p{L}'`\s-]+/gmu);
        const twoSpacesRx = new RegExp(/\s\s+/gm);
        isValid = !lettersRx.test(value) && !twoSpacesRx.test(value) && value.length >= 2;
      }
      setErrorTypes(validator);
    }
    if (validator === "password") {
      if (!value) {
        isValid = true;
      } else {
        const re = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])((?=.*?[0-9])|(?=.*?[#?!@$%^&*-])).{8,}$/g);
        isValid = re.test(value);
      }
      setErrorTypes(validator);
    }
    if (validator === "zipCode") {
      if (!value) {
        isValid = true;
      } else {
        const re = new RegExp(/^[0-9]{5}(?:-[0-9]{4})?$/g);
        isValid = re.test(value);
      }

      setErrorTypes(validator);
    }

  }

  if (equalTo) {
    isValid = value === equalTo;
    setErrorTypes('equalTo');
  }

  function setErrorTypes(typeErr: validatorName) {
    !isValid && errorsTypes.push(typeErr);
    isValid && errorsTypes.filter(item => item !== typeErr);
  }

  return { isValid, errorsTypes };
}
