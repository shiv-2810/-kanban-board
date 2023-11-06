import {
  CircleIcon,
  Delete,
  Edit,
  SeparatorHorizontal,
  StarIcon,
  Trash,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { EditTask } from "./AddTask";
import { useContext } from "react";
import { TaskContext } from "@/context/TaskContext";

interface TaskCardProps {
  task: {
    title: string;
    taskDescription: string;
    taskType: string;
  };
}

const TaskCard = ({ task }: TaskCardProps) => {
  const { title, taskDescription, taskType } = task;
  const { deleteTask } = useContext(TaskContext);
  return (
    <Card className="rounded-xl mb-3">
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{taskDescription}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-6 text-sm text-muted-foreground justify-end">
          {/* <div onClick={onEdit} className="flex items-center">
            <Edit className="mr-1 h-5 w-5  text-zinc-500 cursor-pointer" />
          </div> */}
          <EditTask task={task}  />
          <div onClick={() => deleteTask(task)} className="flex items-center">
            <Trash className="mr-1 h-5 w-5 text-red-400 cursor-pointer" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
