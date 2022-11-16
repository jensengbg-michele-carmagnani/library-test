import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import SigninComponent from "../../../components/SigninComponent";
import Header from "../../Header";

async function SignIn() {
  const providers = await getProviders();
  return (
    <div className="flex flex-col justify-center items-center mt-24  ">
      <div className="border flex flex-col items-center py-14 rounded-lg  ">
        <h2 className="text-center text-lg text-gray-500">
          SignIn with messanger
        </h2>
        <div className="pb-10">
          <Image
            className="rounded-full mx-2 object-cover"
            width={200}
            height={200}
            src="https://links.papareact.com/161"
            alt="Profile"
          />
        </div>
        <SigninComponent providers={providers} />
      </div>
    </div>
  );
}

export default SignIn;
