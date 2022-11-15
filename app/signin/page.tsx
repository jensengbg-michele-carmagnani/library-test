import React from "react";
import signIn from "../../pages/api/signIn";
import SignInForm from "./SignInForm";
import { ResLogin, LoginForm } from "../../typing";

type Props = {};

const SignIn = async (props: Props) => {
  // const { register, handleSubmit } = useForm<PropsInput>();
  // const onSubmit: SubmitHandler<PropsInput> = async (data) => {};
  // const onSubmitHandler = async (
  //   e: React.FormEvent<HTMLFormElement>,
  //   formData: LoginForm
  // ) => {
  //   e.preventDefault();
  //   const data = await fetch(`${process.env.API_URL}/auth/login`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username: formData.username,
  //       password: formData.password,
  //     }),
  //   })
  //     .then((res) => console.log(res.json()))
  //     .catch((err) => console.log(err));
  // };
  // const signInApi = async (data: LoginForm) => {
  //   await signIn(data);
  // };

  return (
    <div className="flex flex-col justify-start items-center h-screen pt-44 ">
      <SignInForm />
    </div>
  );
};

export default SignIn;
