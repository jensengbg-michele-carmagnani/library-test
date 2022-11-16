"use client";
import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Button from "./Button";

type Props = {
  providers: Awaited<ReturnType<typeof getProviders>>;
};
const SigninComponent = ({ providers }: Props) => {
  return (
    <div className="">
      {Object.values(providers!).map((provider) => (
        <div key={provider.id}>
          <button
            className="bg-[#0380FA] font-semibold border-[1px] py-2 px-6 rounded-full uppercase text-sm tracking-widest text-gray-100 transition-all duration-300 ease-in-out hover:border-[1px]
     hover:border-[#0365E0]/40 hover:text-gray-400/40;"
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: process.env.VERCEL_URL || `http://localhost:3000`,
              })
            }
          >
            signIn
          </button>
        </div>
      ))}
    </div>
  );
};

export default SigninComponent;
