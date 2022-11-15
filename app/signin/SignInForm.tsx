"use client";
import React, { useState } from "react";
import signIn from "../../pages/api/signIn";
import { LoginForm, ResLogin } from "../../typing";

// type Props = {
//   signInHandler: (data: LoginForm) => Promise<ResLogin>;
// };

const SignInForm = () => {
  const [username, setusername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFunction: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setFunction(e.target.value);
  };
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userDetail = {
      username,
      password,
    };
    console.log(userDetail);
    const data = await signIn(userDetail);

    console.log(data);
  };

  return (
    <div className="border border-gray-300 p-10 rounded shadow-sm">
      <h1 className="text-center mb-10 text-2xl">Sign In</h1>
      <form onSubmit={onSubmitHandler}>
        <div className=" ">
          <div className="flex flex-col space-y-5">
            <label htmlFor="name">Name</label>
            <input
              placeholder="Usarname"
              className="contactInput"
              type="text"
              onChange={(e) => inputChangeHandler(e, setusername)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Password"
              className="contactInput "
              type="password"
              onChange={(e) => inputChangeHandler(e, setPassword)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#F7AB0A] hover:bg-yellow-400 py-5 px-10 w-full transition-all mt-2 active:scale-95 duration-75 rounded-md text-black font-bold text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
