import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
  export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>YourStudyBuddy</title>
        <meta name="description" content="YourStudyBuddy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#ffff]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
            Learn with <span className="text-[#808080]">Andy</span>!
          </h1>
          <h2 className="text-2xl font-bold text-black">
            Your Study Buddy! 😁
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            {/*Make a div which should be wider and taller than the other two divs */}
            
            <div className="flex max-w-xs height-125vh flex-col gap-4 rounded-xl bg-[#808080]/20 p-4 text-black hover:bg-[#808080]/40">
              <h3 className="text-2xl font-bold">Your History</h3>
              <div className="text-lg">
                View your past contributions or interactions with Andy!
              </div>
            </div>
            <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-[#808080]/20 p-4 text-black hover:bg-[#808080]/40">
              <h3 className="text-2xl font-bold">Courses</h3>
              <div className="text-lg">
                View the courses that you are enrolled in (or enroll)!
              </div>
            </div>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-[#808080]/20 p-4 text-black hover:bg-[#808080]/40"
              href="/courses"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Course Enrollment</h3>
              <div className="text-lg">
                Explore the courses that you can learn
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-[#808080]/20 p-4 text-black hover:bg-[#808080]/40"
              target="_blank"
              href="/actions"
            >
              <h3 className="text-2xl font-bold">Actions</h3>
              <div className="text-lg">
                These are the various tools you can use to help you
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
