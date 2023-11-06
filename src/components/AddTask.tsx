import { Task } from "@/models/Task";
import { Edit } from "lucide-react";
import { useContext, useState } from "react";
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

interface EditTaskProps {
  task: Task;
}

const AddTaskDialog = ({ task }: { task?: any }) => {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState<string>(task?.title || "");
  const [description, setDescription] = useState<string>(
    task?.taskDescription || ""
  );

  const handleChangeDescription = (value: string) => {
    setDescription(value);
  };

  const handleChangeTitle = (value: string) => {
    setTitle(value);
  };

  const saveTask = () => {
    addTask({
      title: title,
      taskDescription: description,
      taskType: "toDo",
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
        {/* <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Task Type
          </Label>
          <Input id="username" value="@peduarte" className="col-span-3" />
        </div> */}
      </div>
      <DialogFooter>
        <Button onClick={saveTask} type="submit">
          Save changes
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
