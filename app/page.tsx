import React from "react";
import Link from "next/link";

import { unstable_getServerSession } from "next-auth";
import Header from "./Header";
import { Providers } from "./providers";

type Props = {};

const Home = async (props: Props) => {
  const session = await unstable_getServerSession();
  return (
    <Providers session={session}>
      <Header session={session} />
      <main className="max-w-7xl m-auto flex justify-center items-center h-screen text-4xl animate-pulse bg-slate-500 rounded-sm">
        <Link href={"/books"}>
          <div className="text-5xl">Get In our store</div>
        </Link>
      </main>
    </Providers>
  );
};

export default Home;
