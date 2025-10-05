import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  const [refresh, setRefresh] = useState(false);

  const handleTaskAdded = () => setRefresh(!refresh);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          To-Do Tasks
        </h1>
        <TaskForm onTaskAdded={handleTaskAdded} />
        <TaskList key={String(refresh)} />
      </div>
    </div>
  );
}
