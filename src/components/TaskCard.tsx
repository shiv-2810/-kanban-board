import { TaskContext } from "@/context/TaskContext";
import {
  Trash
} from "lucide-react";
import { useContext } from "react";
import { EditTask } from "./AddTask";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface TaskCardProps {
  task: {
    title: string;
    taskDescription: string;
    taskType: string;
    id: string;
  };
}

const TaskCard = ({ task }: TaskCardProps) => {
  const { title, taskDescription, taskType } = task;
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="rounded-2xl bg-gray-900/5  ring-1 ring-inset ring-gray-900/10  mb-3 p-2 ">
      <Card className="rounded-2xl">
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle className="sm:text-md text-xl">{title}</CardTitle>
            <CardDescription>{taskDescription}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-6 text-sm text-muted-foreground justify-end">
            <EditTask task={task} />
            <div onClick={() => deleteTask(task)} className="flex items-center">
              <Trash className="mr-1 h-5 w-5 text-red-400 cursor-pointer" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskCard;
