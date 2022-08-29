import React, { FC, FormEvent, useEffect } from "react";
import { useTextInput } from "../useTextInput/useTextInput";
import { InputField } from "./InputField/InputField";

export const TestHook: FC = () => {
  const formData = {
    first_name: useTextInput({
      validators: ["name"],
      filters: ["name"],
      isRequired: true,
    }),
    last_name: useTextInput({ validators: ["name"], isRequired: false }),
    email: useTextInput({
      validators: ["email"],
      filters: ["email"],
      isRequired: true,
    }),
    pass: useTextInput({
      validators: ["password"],
      filters: [],
      isRequired: true,
      notEqualErrText: "John Doe is Neo",
    }),
    confirm_pass: useTextInput({
      isRequired: true,
      notEqualErrText: "Hello world",
      emptyErrText: "I'M EMPTY",
    }),
  };

  useEffect(() => {
    formData.first_name.setValue("John");
  }, []);

  useEffect(() => {
    !formData.confirm_pass.validateOnChange &&
      formData.confirm_pass.setValidateOnChange(true);

    if (!formData.confirm_pass.isDirty) return;

    formData.pass.setIsEqualTo(String(formData.confirm_pass.value));
    formData.confirm_pass.setIsEqualTo(String(formData.pass.value));
  }, [formData.pass.value]);

  useEffect(() => {
    !formData.pass.validateOnChange && formData.pass.setValidateOnChange(true);

    if (!formData.pass.isDirty) return;

    formData.pass.setIsEqualTo(String(formData.confirm_pass.value));
    formData.confirm_pass.setIsEqualTo(String(formData.pass.value));
  }, [formData.confirm_pass.value]);

  const test = () => {
    formData.confirm_pass.setIsRequired(!formData.confirm_pass.isRequired);
    formData.pass.setValue("pass");
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const canProceed = Object.values(formData).every(({ isValid }) => isValid); // => checkForm(formData)

    if (!canProceed) {
      Object.values(formData).forEach(({ checkValidity }) => checkValidity());
      console.log(
        "%c OUT !",
        "color: red; font-size: 16px; font-weight: bold; border-left: 5px solid red"
      );
      return;
    }

    console.log(
      "%c can proceed",
      "color: orange; font-size: 16px; font-weight: bold; border-left: 5px solid orange",
      canProceed
    );
    console.log(
      "%c SUBMIT",
      "color: orange; font-size: 16px; font-weight: bold; border-left: 5px solid orange",
      formData
    );
  };

  return (
    <div className="TestHook" style={{ flex: "1 1 100%", padding: "5em" }}>
      <form onSubmit={onSubmit}>
        <InputField
          placeholder="Some placeholder text here"
          label="First name"
          errors={formData.first_name.errors}
          {...formData.first_name.inputProps}
        />
        <InputField
          placeholder="Some placeholder text here"
          label="Last name"
          errors={formData.last_name.errors}
          {...formData.last_name.inputProps}
        />
        <InputField
          placeholder="Some placeholder text here"
          label="Email"
          errors={formData.email.errors}
          {...formData.email.inputProps}
        />
        <InputField
          placeholder="Some placeholder text here"
          label="Pass"
          errors={formData.pass.errors}
          {...formData.pass.inputProps}
        />
        <InputField
          placeholder="Some placeholder text here"
          label="Pass"
          errors={formData.confirm_pass.errors}
          {...formData.confirm_pass.inputProps}
        />

        {/*<button disabled={submitDisabled}>SUBMIT</button>*/}
        <button>SUBMIT</button>
      </form>
      {/*<button type="button" onClick={test}>TEST</button>*/}
    </div>
  );
};
