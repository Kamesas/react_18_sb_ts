import React, { FC } from "react";

interface iFormRefProps {
  [key: string]: any;
}

export const FormRef: FC<iFormRefProps> = () => {
  // const { register, handleSubmit } = useForm<IFormInput>();
  // const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const field = e.target as HTMLFormElement;

    console.log(field.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <input {...register("firstName", { required: true, maxLength: 20 })} /> */}
      <input name="userName" />

      <button type="submit">Submit</button>
    </form>
  );
};
