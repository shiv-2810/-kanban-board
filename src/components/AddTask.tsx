import { Task } from "@/models/Task";
import { Edit } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { TaskContext } from "@/context/TaskContext";
import { v4 as uuidv4 } from "uuid";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface EditTaskProps {
  task: Task;
}

const AddTaskDialog = ({ task }: { task?: any }) => {
  const [taskType, setTaskType] = React.useState(task?.taskType || 'toDo');
  const [taskTypeTitle, setTaskTypeTitle] = useState("");
  const { addTask, editTask } = useContext(TaskContext);
  const [title, setTitle] = useState<string>(task?.title || "");
  const [description, setDescription] = useState<string>(
    task?.taskDescription || ""
  );

  const handleChangeDescription = (value: string) => {
    setDescription(value);
  };

  useEffect(() => {
    if (taskType === "toDo") {
      setTaskTypeTitle("To Do");
    } else if (taskType === "inProgress") {
      setTaskTypeTitle("In Progress");
    } else {
      setTaskTypeTitle("Completed");
    }
  }, [taskType]);

  const handleChangeTitle = (value: string) => {
    setTitle(value);
  };

  const saveTask = () => {
    addTask({
      id: uuidv4(),
      title: title,
      taskDescription: description,
      taskType: "toDo",
    });
  };

  const editTasks = () => {
    editTask({
      ...task,
      title,
      taskType,
      taskDescription: description,
    });
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>{task?.title ? "Edit task" : "Add task"}</DialogTitle>
        <DialogDescription>
          Enter the details of your new task below.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="title" className="text-right">
            Title
          </Label>
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              handleChangeTitle(e.target.value)
            }
            id="title"
            value={title}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Description
          </Label>
          <Input
            id="task-description"
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              handleChangeDescription(e.target.value)
            }
            value={description}
            className="col-span-3"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="relative" asChild>
            <Button className="w-16 px-11 absolute bottom-5" variant="outline">
              {taskTypeTitle}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={taskType}
              onValueChange={setTaskType}
            >
              <DropdownMenuRadioItem value="toDo">To Do</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="inProgress">
                In Progress
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="completed">
                Completed
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <DialogFooter>
        <Button onClick={task?.title ? editTasks : saveTask} type="submit">
          Save {task?.title && "changes"}
        </Button>
      </DialogFooter>
    </>
  );
};

const AddTask = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button>Add Task</Button>
      </DialogTrigger>
      <DialogContent>
        <AddTaskDialog />
      </DialogContent>
    </Dialog>
  );
};

export const EditTask = ({ task }: EditTaskProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Edit className="mr-1 h-5 w-5  text-zinc-500 cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <AddTaskDialog task={task} />
      </DialogContent>
    </Dialog>
  );
};

export default AddTask;
