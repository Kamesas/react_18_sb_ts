import React, { useState } from 'react';
import { filtersName, inputFilterValue } from './inputFilterValue';
import { isValidInput, validatorName } from './isValidInput';

type inputProps = {
  defaultValue?: string;
  filters?: Array<filtersName>;
  validators?: Array<validatorName>;
  equalTo?: string;
}

export type returnUseInput = ReturnType<typeof useInputControlled>;

export const useInputControlled = (props?: inputProps) => {
  const [value, setValue] = useState(props?.defaultValue || '');
  const [isValid, setIsValid] = useState(true);
  const [errors, setErrors] = useState<Array<string>>([]);
  const [wasOnblur, setOnblur] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (props?.filters?.length) {
      val = inputFilterValue({ filters: props?.filters, value: val })
    }
    wasOnblur && checkValidation(val);
    !wasOnblur && setValue(val);
  }

  const onBlur = () => {
    setOnblur(true);

    if (wasOnblur) return;
    checkValidation(value);
  }

  const checkValidation = (value: string) => {
    setValue(value);
    if (!props?.validators?.length) return true;

    const { isValid, errorsTypes } = isValidInput({ value, validators: props?.validators, equalTo: props?.equalTo });
    !equalsArrayIgnoreOrder(errors, errorsTypes) && setErrors([...errorsTypes]);
    setIsValid(isValid);
    return isValid;
  }

  const checkInputValidation = () => {
    setOnblur(true);
    return checkValidation(value);
  }

  return {
    errors,
    isValid,
    setValue,
    setIsValid,
    setErrors,
    wasOnblur,
    checkValidation: checkInputValidation,
    inputAttr: {
      value,
      onBlur,
      onChange,
    }
  };
}

function equalsArrayIgnoreOrder<T, U>(a: Array<T>, b: Array<U>) {
  if (a.length !== b.length) return false;
  const uniqueValues = Array.from(new Set([...a, ...b]));
  for (const v of uniqueValues) {
    const aCount = a.filter(e => e === v).length;
    const bCount = b.filter(e => e === v).length;
    if (aCount !== bCount) return false;
  }
  return true;
}
