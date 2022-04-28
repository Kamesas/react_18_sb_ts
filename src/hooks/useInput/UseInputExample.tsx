import React, { FC } from "react";
import { validatorName } from "./isValidInput";
import { returnUseInput, useInput } from "./useInput";

interface iUseInputExampleProps {
  [key: string]: any;
}

const errMsgs: Partial<Record<validatorName, string>> = {
  email: "Email error nsg",
  userName: "UserName err msg",
  noToBeEmpty: "noToBeEmpty error msg",
  password: "Pass error message",
  zipCode: "ZipCode err msg",
  equalTo: "notMatch err",
};

export const UseInputExample: FC<iUseInputExampleProps> = () => {
  const email = useInput({ validators: ["email", "noToBeEmpty"] });
  const userName = useInput({ validators: ["userName", "noToBeEmpty"] });
  const zipCode = useInput({ validators: ["zipCode"] });

  const pass = useInput({ validators: ["password", "noToBeEmpty"] });
  const confirmPass = useInput({ validators: ["noToBeEmpty"] });

  const onChangePassHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    pass.inputAttr.onChange(e);
    const isMatch = e.target.value === confirmPass.value;
    confirmPass.setErrors(setNotMatchErrors(confirmPass, isMatch));
  };

  const onChangeConfirmPassHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    confirmPass.inputAttr.onChange(e);
    const isMatch = e.target.value === pass.value;
    confirmPass.setErrors(setNotMatchErrors(confirmPass, isMatch));
  };

  const onBlurConfirmPass = (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    console.log("blur conf", e.target.value, pass.value);

    const isMatch = e.target.value === pass.value;
    confirmPass.setErrors(setNotMatchErrors(confirmPass, isMatch));
  };

  const setNotMatchErrors = (
    input: returnUseInput,
    isMatch: boolean,
    onBlur: boolean = false
  ) => {
    if (!input.wasOnblur && !onBlur) return input.errors;

    return isMatch
      ? input.errors.filter((item) => item !== "notMatch")
      : Array.from(new Set([...input.errors, "notMatch"]));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    email.inputAttr.onBlur();
    userName.inputAttr.onBlur();
    zipCode.inputAttr.onBlur();
    pass.inputAttr.onBlur();
    confirmPass.checkInputValidation();
    console.log({ email, userName });
  };
  return (
    <form onSubmit={submitHandler}>
      <h1>Uncontrolled inputs</h1>
      <fieldset>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="text" {...email.inputAttr} />
        {email.errors.map((err) => {
          const currItem = err as keyof typeof errMsgs;
          return (
            <div key={err} style={{ color: "red", marginTop: "1rem" }}>
              {errMsgs[currItem]}
            </div>
          );
        })}
      </fieldset>

      <fieldset>
        <label htmlFor="userName">userName</label>
        <input id="userName" type="text" {...userName.inputAttr} />
        {userName.errors.map((err) => {
          const currItem = err as keyof typeof errMsgs;
          return (
            <div key={err} style={{ color: "red", marginTop: "1rem" }}>
              {errMsgs[currItem]}
            </div>
          );
        })}
      </fieldset>

      <fieldset>
        <label htmlFor="zipCode">zipCode</label>
        <input id="zipCode" type="text" {...zipCode.inputAttr} />
        {zipCode.errors.map((err) => {
          const currItem = err as keyof typeof errMsgs;
          return (
            <div key={err} style={{ color: "red", marginTop: "1rem" }}>
              {errMsgs[currItem]}
            </div>
          );
        })}
      </fieldset>

      <fieldset>
        <label htmlFor="pass">Password</label>
        <input
          id="pass"
          type="text"
          {...pass.inputAttr}
          onChange={onChangePassHandler}
        />
        {pass.errors.map((err) => {
          const currItem = err as keyof typeof errMsgs;
          return (
            <div key={err} style={{ color: "red", marginTop: "1rem" }}>
              {errMsgs[currItem]}
            </div>
          );
        })}
      </fieldset>

      <fieldset>
        <label htmlFor="userNameInputId">confirmPass</label>
        <input
          id="userNameInputId"
          type="text"
          {...confirmPass.inputAttr}
          onChange={onChangeConfirmPassHandler}
          // onBlur={onBlurConfirmPass}
          onBlur={() => console.log("llll")}
        />
        {confirmPass.errors.map((err) => {
          const currItem = err as keyof typeof errMsgs;
          return (
            <div key={err} style={{ color: "red", marginTop: "1rem" }}>
              {errMsgs[currItem]}
            </div>
          );
        })}
      </fieldset>

      <button type="submit">{email.isValid ? "Valid" : "NOT valid !!!"}</button>
    </form>
  );
};
