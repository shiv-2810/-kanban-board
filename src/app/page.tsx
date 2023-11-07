"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TaskCard from "@/components/TaskCard";
import { Button } from "@/components/ui/button";
import { TaskContext } from "@/context/TaskContext";
import { useContext } from "react";

export default function Home() {
  const { tasks } = useContext(TaskContext);

  return (
    <main className="relative mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
      <MaxWidthWrapper>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[71.187rem] top-36"
        />
      </div>
      <div className="flex flex-col space-y-5  items-center mt-16 md:flex-row md:space-y-0 md:items-start md:space-x-5 md:px-24">
        <div className="w-1/3 min-h-full flex flex-col">
          <Button className="w-20 rounded-xl bg-blue-500 text-white font-bold hover:bg-blue-700 px-12">
            To Do
          </Button>
          <div className="mt-7">
            {tasks.map((task, i) =>
              task.taskType === "toDo" ? <TaskCard key={i} task={task} /> : null
            )}
          </div>
        </div>
        <div className="w-1/3 min-h-full flex flex-col">
          <Button className="w-20 rounded-xl bg-orange-400 text-white font-bold px-14 hover:bg-orange-600">
            In Progress
          </Button>
          <div className="mt-7">
            {tasks.map((task, i) =>
              task.taskType === "inProgress" ? (
                <TaskCard key={i} task={task} />
              ) : null
            )}
          </div>
        </div>
        <div className="w-1/3 min-h-full flex flex-col">
          <Button className="w-20 rounded-xl bg-green-500 text-white font-semibold px-14">
            Completed
          </Button>
          <div className="mt-7">
            {tasks.map((task, i) =>
              task.taskType === "completed" ? (
                <TaskCard key={i} task={task} />
              ) : null
            )}
          </div>
        </div>
      </div>
      </MaxWidthWrapper>
    </main>
  );
}
