import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  const [refresh, setRefresh] = useState(false);

  const handleTaskAdded = () => setRefresh(!refresh);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-5xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side - Task Form */}
        <div className="pr-6 border-r">
          <h2 className="text-xl font-bold mb-4">Add a Task</h2>
          <TaskForm onTaskAdded={handleTaskAdded} />
        </div>

        {/* Right Side - Task List */}
        <div className="pl-6">
          <TaskList key={String(refresh)} />
        </div>
      </div>
    </div>
  );
}
