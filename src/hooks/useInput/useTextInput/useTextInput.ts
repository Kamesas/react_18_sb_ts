import {ChangeEvent, useEffect, useState} from "react";
import { iUseTextInputProps, iValidatorObj, tInputFilter } from "./inputsInterfaces";
import {applyValidators, prepareValidatorsArr} from "./validators";
import {applyFilters, prepareFiltersArr} from "./filters";

export const useTextInput = ( props?: iUseTextInputProps ) => {
  const [value, setValue] = useState(props?.value || "");
  const [errors, setErrors] = useState(props?.errors || []);
  const [validateOnChange, setValidateOnChange] = useState(!!props?.validateOnChange);

  const [isValid, setIsValid] = useState(props?.isValid !== undefined ? props.isValid : false );
  const [isRequired, setIsRequired] = useState(props?.isRequired !== undefined ? props.isRequired : true );
  const [isDirty, setIsDirty] = useState(false);
  const [isEqualTo, setIsEqualTo] = useState<string | null>(props?.equalTo !== undefined ? props?.equalTo : null);

  const [validators, setValidators] = useState<Array<iValidatorObj>>(prepareValidatorsArr(props?.validators || []));
  const [filters, setFilters] = useState<Array<tInputFilter>>(prepareFiltersArr(props?.filters || []));

  const emptyErr = props?.emptyErrText ? props?.emptyErrText : "This field can't be empty";
  const notEqualErr = props?.notEqualErrText ? props?.notEqualErrText : "Don't match";

  useEffect(() => {
    if (!validateOnChange) {
      props?.onChangeCallback?.();
      return;
    }
    checkValidity();
    props?.onChangeCallback?.();
  }, [value]); // eslint-disable-line

  useEffect(() => {
    isRequired && isDirty && checkValidity();
    !isRequired && isDirty && errors.includes(emptyErr) && setErrors(errors.filter(err => err !== emptyErr ));
  }, [isRequired])

  useEffect(() => {
    isDirty && checkValidity();
  }, [isEqualTo])

  const onFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    props?.onFocusCallback?.(e);
  }

  const onBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (isDirty && !validateOnChange) {
      setValidateOnChange(true);
      checkValidity();
    }
    props?.onBlurCallback?.(e);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    e.stopPropagation();
    let newValue = filters ? applyFilters(e.target.value, filters) : e.target.value;
    if (newValue === value) return; // to prevent extra state update
    setValue(newValue);
    !isDirty && setIsDirty(true);
  };

  const validateAndSet = (val: string) => {
    setValue(val);
    setValidateOnChange(true);
    checkValidity(val);
  };

  const checkValidity = (val?: string) => {
    const newVal = val === undefined ? value : val;
    const validationErrors = validators?.map(({error}) => error) || [];
    const customErrors = errors.filter(err => !validationErrors.includes(err) && err !== emptyErr && err !== notEqualErr);

    if(!isRequired && !value?.length) {
      setErrors(customErrors);
      setIsValid(true);
      return true;
    }

    const newErrors = validators
      ? [...applyValidators(newVal || "", validators), ...customErrors]
      : [...customErrors];

    if (!newErrors.length && isRequired && !value?.length)
      newErrors.push(emptyErr);

    if (isEqualTo !== null && value !== isEqualTo)
       newErrors.push(notEqualErr);

    setErrors(newErrors);
    setIsValid(!newErrors?.length);
    return !newErrors?.length;
  };

  return {
    value,
    setValue: validateAndSet,
    onChange,
    onBlur,
    onFocus,

    errors,
    setErrors,

    isEqualTo,
    setIsEqualTo,

    isValid,
    setIsValid,

    isRequired,
    setIsRequired,

    isDirty,

    checkValidity,
    validateOnChange,
    setValidateOnChange,

    validators,
    setValidators,

    filters,
    setFilters,

    inputProps: {
      value,
      onChange,
      onBlur,
      onFocus
    }
  };
};
