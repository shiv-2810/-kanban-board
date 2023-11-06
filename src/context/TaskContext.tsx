"use client";

import { Task } from "@/models/Task";
import { createContext, useState, ReactNode } from "react";
import tasksData from "../data/tasks.json";

interface TaskContextProps {
  tasks: Task[];
  addTask: (newTask: Task) => void;
  deleteTask: (deletedTask: Task) => void;
  filterTasks: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

// Create context with a default value
export const TaskContext = createContext<TaskContextProps>({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
  filterTasks: () => {},
});

// Create a provider component
export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(tasksData);

  const addTask = (newTask: Task) => {
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const deleteTask = (deletedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.title !== deletedTask.title)
    );
  };

  const filterTasks = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTasks(
        e?.target?.value
          ? tasksData.filter((task) =>
              task.title.toLowerCase().includes(e.target.value.toLowerCase())
            )
          : tasksData
      );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, filterTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
