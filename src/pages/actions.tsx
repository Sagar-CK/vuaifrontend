import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

export default function Actions() {

return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="text-[hsl(280,100%,70%)]">Actions</span>!
          </h1>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href=""
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Summarization</h3>
              <div className="text-lg">
              Get your course details summarized to better understand it
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              target="_blank"
              href=""
            >
              <h3 className="text-2xl font-bold">Ask Away</h3>
              <div className="text-lg">
                Ask any doubts or questions you have about the course and get them answered
              </div>
            </Link>
          </div>
        </div>
      </main>
)
}
