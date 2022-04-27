import React, { FC } from "react";
import { validatorName } from "./isValidInput";
import { useInput } from "./useInput";

interface iUseInputExampleProps {
  [key: string]: any;
}

const errMsgs: Partial<Record<validatorName, string>> = {
  email: "Email error nsg",
  userName: "UserName err msg",
  noToBeEmpty: "noToBeEmpty error msg",
  password: "Pass error message",
  zipCode: "ZipCode err msg",
};

export const UseInputExample: FC<iUseInputExampleProps> = () => {
  const email = useInput({ validators: ["email", "noToBeEmpty"] });
  const userName = useInput({ validators: ["userName", "noToBeEmpty"] });
  const zipCode = useInput({ validators: ["zipCode"] });

  const pass = useInput({ validators: ["password", "noToBeEmpty"] });
  // const confirmPass = useInput({ validators: ["password", "noToBeEmpty"] });

  // const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   email.inputAttr.onChange(e);
  //   const isMatch = e.target.value === userName.value;
  //   userName.setErrors(setNotMatchErrors(userName, isMatch));
  // };

  // const onChangeUserNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   userName.inputAttr.onChange(e);
  //   const isMatch = e.target.value === email.value;
  //   userName.setErrors(setNotMatchErrors(userName, isMatch));
  // };

  // const setNotMatchErrors = (
  //   input: returnUseInput,
  //   isMatch: boolean,
  //   onBlur: boolean = false
  // ) => {
  //   if (!input.wasOnblur && !onBlur) return input.errors;

  //   return isMatch
  //     ? input.errors.filter((item) => item !== "notMatch")
  //     : Array.from(new Set([...input.errors, "notMatch"]));
  // };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    email.inputAttr.onBlur();
    userName.inputAttr.onBlur();
    zipCode.inputAttr.onBlur();
    console.log({ email, userName });
  };
  return (
    <form onSubmit={submitHandler}>
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
          // onChange={onChangeEmailHandler}
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

      {/* <fieldset>
        <label htmlFor="userNameInputId">UserName</label>
        <input
          id="userNameInputId"
          type="text"
          {...userName.inputAttr}
          onChange={onChangeUserNameHandler}
        />
        {userName.errors.length > 0 && (
          <div style={{ color: "red", marginTop: "1rem" }}>
            Error: {JSON.stringify(userName.errors, null, 4)}
          </div>
        )}
      </fieldset> */}

      <button type="submit">{email.isValid ? "Valid" : "NOT valid !!!"}</button>
    </form>
  );
};
