import { useEffect, useState } from "react";
import { getTasks } from "../api/taskApi";
import TaskCard from "./TaskCard";

interface Task {
  id: number;
  title: string;
  description: string;
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet</p>
      ) : (
        tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDone={loadTasks} />
        ))
      )}
    </div>
  );
}
