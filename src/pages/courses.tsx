// pages/translate.tsx

import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Translate() {
    const hello = api.example.hello.useQuery({ text: "from tRPC" });
  
    return (
        <>
        <Head>
      </Head>
        // give me a two column flex layout
        <main>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold">Courses</h1>
              <p className="text-gray-600">List of courses</p>
            </div>
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold">Courses</h1>
              <p className="text-gray-600">List of courses</p>
            </div>
          </div>       </main>
          </>
        
    );
  }

