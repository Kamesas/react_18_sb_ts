import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

export function Example1() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}

// import {Link} from "react-router-dom";
// import {absRoutes} from "helpers/routes";
// import {useLogin} from "./useLogin";
// import {Button} from "components/shared/Button/Button";
// import {SubmitHandler, useForm} from "react-hook-form";
// import {InputFieldRef} from "components/shared/FormComponents/InputField/InputFieldRef";
// import {PasswordFieldRef} from "components/shared/FormComponents/PasswordField/PasswordFieldRef";
// import "./Login.scss";

// export type FormValues = {
//   email: string;
//   pass: string;
//   rememberMe: string;
// };

// const emailValidation = (value: string) => {
//   const reg =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return reg.test(value) || "Please enter a valid email";
// };

// const passwordValidation = (value: string) => {
//   const arrRegex = [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/];
//   return (
//     arrRegex.every(pattern => pattern.test(value)) ||
//     "must include lower, upper, number, and special chars"
//   );
// };

// const Login = () => {
//   const {loginHandler, isLoading} = useLogin();

//   const {
//     register,
//     handleSubmit,
//     formState: {errors}
//   } = useForm<FormValues>({mode: "onBlur"});

//   const onSubmit: SubmitHandler<FormValues> = data => {
//     loginHandler(data);
//   };

//   return (
//     <div className="Login">
//       <p className="Login-title">WELCOME</p>
//       <form className="Login-form" onSubmit={handleSubmit(onSubmit)} noValidate>
//         <InputFieldRef
//           placeholder="enter your email"
//           className="Login-form-input"
//           type="email"
//           {...register("email", {
//             required: "Email is required",
//             validate: emailValidation
//           })}
//           required
//           errors={errors?.email && [errors.email.message || ""]}
//         />

//         <PasswordFieldRef
//           placeholder="Enter your password"
//           className="Login-form-input"
//           {...register("pass", {
//             required: "Password is required",
//             validate: passwordValidation
//           })}
//           required
//           errors={errors?.pass && [errors.pass.message || ""]}
//         />

//         <Button
//           color="light"
//           size="lg"
//           loading={isLoading}
//           type="submit"
//           className="Login-form-submit"
//         >
//           Sign in
//         </Button>
//       </form>

//       <div className="Login-support">
//         <label className="Login-checkbox">
//           <input className="Login-checkbox-input" type="checkbox" {...register("rememberMe")} />
//           <span className="Login-checkbox-circle" />
//           <span>REMEMBER ME</span>
//         </label>

//         <Link className="Login-support-remember__link" to={absRoutes.auth.forgotPass}>
//           Forgot Password?
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Login;
