import React, { FC, useEffect } from "react";
import { isValidForm } from "./checkIsFormValid";
import { validatorName } from "./isValidInput";
import { useInputControlled } from "./useInputControlled";

interface iUseInputExampleProps {
  [key: string]: any;
}

const errMsgs: Partial<Record<validatorName, string>> = {
  email: "Email error nsg",
  userName: "UserName err msg",
  noToBeEmpty: "noToBeEmpty error msg",
  password: "Pass error message",
  zipCode: "ZipCode err msg",
  equalTo: "equal To message err",
};

export const UseControlledInputExample: FC<iUseInputExampleProps> = () => {
  const email = useInputControlled({ validators: ["email", "noToBeEmpty"] });
  const userName = useInputControlled({
    defaultValue: "Alex",
    validators: ["userName", "noToBeEmpty"],
  });
  const zipCode = useInputControlled({
    validators: ["zipCode"],
    filters: ["onlyDigits"],
  });

  const pass = useInputControlled({ validators: ["password", "noToBeEmpty"] });
  const confirmPass = useInputControlled({
    validators: ["noToBeEmpty"],
    equalTo: pass.inputAttr.value,
  });

  const form = { email, userName, zipCode, pass, confirmPass };

  useEffect(() => {
    pass.inputAttr.value && pass.checkValidation();
    if (confirmPass.inputAttr.value && confirmPass.wasOnblur) {
      confirmPass.checkValidation();
    }
  }, [pass.inputAttr.value, confirmPass.inputAttr.value]); // eslint-disable-line

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidForm(form)) return;

    console.log(form);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    email.setValue(value.toUpperCase().slice(0, 3));
  };

  const add = () => {
    email?.setValue("oooooo");
    // email?.setValue("semak@gamil.com");
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Controlled inputs</h1>
      <button onClick={add}>add val</button>
      <fieldset>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          {...email.inputAttr}
          onChange={onChangeHandler}
        />
        {form.email.errors.map((err) => {
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
        {form.userName.errors.map((err) => {
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
        {form.zipCode.errors.map((err) => {
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
        <input id="pass" type="text" {...pass.inputAttr} />
        {form.pass.errors.map((err) => {
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
        <input id="userNameInputId" type="text" {...confirmPass.inputAttr} />
        {form.confirmPass.errors.map((err) => {
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
