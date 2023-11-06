"use client";

import TaskCard from "@/components/TaskCard";
import { Button } from "@/components/ui/button";
import { TaskContext } from "@/context/TaskContext";
import { useContext } from "react";

export default function Home() {
  const { tasks } = useContext(TaskContext);

  return (
    <main className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
      <div className="flex flex-col space-y-5 px-24 items-center mt-16 md:flex-row md:space-y-0 md:items-start md:space-x-5">
        <div className="w-1/3 min-h-full flex flex-col">
          <Button className="w-20 rounded-xl bg-zinc-300 text-zinc-900">
            To Do
          </Button>
          <div className="mt-7">
            {tasks.map((task, i) =>
              task.taskType === "toDo" ? <TaskCard key={i} task={task} /> : null
            )}
          </div>
        </div>
        <div className="w-1/3 min-h-full flex flex-col">
          <Button className="w-20 rounded-xl bg-zinc-300 text-zinc-900 px-14">
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
          <Button className="w-20 rounded-xl bg-zinc-300 text-zinc-900 px-14">
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
    </main>
  );
}
