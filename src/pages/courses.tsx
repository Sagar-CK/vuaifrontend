// pages/translate.tsx

import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { useState } from "react";
import { useRouter } from "next/router";

class Course{
  name:string;
  description:string;
  topics: string[];
  subtopics: string[];

  constructor(name:string,description:string,topics: string[],subtopics: string[]){
    this.name=name;
    this.description=description;
    this.topics=topics;
    this.subtopics=subtopics;
  }

}




export default function Translate({course}: {course: Course}) {
    const hello = api.example.hello.useQuery({ text: "from tRPC" });

    course = new Course("Algorithms and Data Structures", "Manu failing", ["Graph", "DP", "Linked "], ["Defination"]);

    const [topic, setTopic] = useState("Graph"); 
  
    return (
      <>
        <Head>
        <title>YourStudyBuddy</title>
         <meta name="description" content="YourStudyBuddy" />
         <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className = "flex justify-center flex-row min-h-screen min-w-screen">
          {/* //   <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
      //       Course<span className="text-[#808080]">Information</span>!
      //     </h1> */}

            <div className = "bg-red-500 w-[25%] min-h-screen justify-center flex-col p-5 border-2">
              <h1>
                {course.getName()}
              </h1>
              {
                course.getTopics().map((topic) => (
                  <button className = "w-full h-12 justify-center" onClick={
                    () => setTopic(topic)
                  }>
                    {topic}
                  </button>
                ))
              }
            </div>
            <div className = " bg-blue-500 w-[75%] min-h-screen flex-col justify-center">
              <h2>
                {topic}
              </h2>
            {
              course.getSubtopics().map((subtopic) => (
                <div className = "flex bg-blue-500 w-full -h-12 justify-center">{subtopic} </div>
              ))
            }
            </div>
          </div>
        </main>
      </>
      //   <>
      //   <Head>
      //   <title>YourStudyBuddy</title>
      //   <meta name="description" content="YourStudyBuddy" />
      //   <link rel="icon" href="/favicon.ico" />
      // </Head>
      //   <main>
      //     <div className="flex justify-center">
      //   <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
      //       Course<span className="text-[#808080]">Information</span>!
      //     </h1>
      //     </div>
      //     <div className="flex flex-col py-10 justify-center md:flex-row">
      //       <div className="md:w-1/2">
      //         <h1 className="text-4xl font-bold">Course Topics</h1>
      //         <div className="flex flex-row py-10 justify-center md:flex-row">
      //           <div>
      //             <h1 className="text-4xl font-bold">Topic 1</h1>
      //             <p className="text-gray-600"></p>
      //             </div>
      //           <div className="md:w-1/2">
      //             <h1 className="text-4xl font-bold">Topic 2</h1>
      //             <p className="text-gray-600"></p>
      //           </div>
      //         <p className="text-gray-600"></p>
      //       </div>
      //       </div>
      //       <div className="md:w-0.9">
      //         <h1 className="text-4xl font-bold">Subtopics</h1>
      //         <p className="text-gray-600"></p>
      //       </div>
      //     </div>       
      //     </main>
      //     </>
        
    );
  }

