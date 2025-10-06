import { markTaskDone } from "../api/taskApi";

interface Task {
  id: number;
  title: string;
  description: string;
}

interface Props {
  task: Task;
  onDone: () => void;
}

export default function TaskCard({ task, onDone }: Props) {
  const handleDone = async () => {
    await markTaskDone(task.id);
    onDone();
  };

  return (
    <div className="bg-gray-200 rounded-lg p-4 flex justify-between items-center mb-3 shadow-sm">
      <div>
        <h3 className="font-semibold text-lg">{task.title}</h3>
        <p className="text-gray-600">{task.description}</p>
      </div>
      <button
        onClick={handleDone}
        className="border border-gray-700 rounded-md px-4 py-1 hover:bg-gray-300 transition"
      >
        Done
      </button>
    </div>
  );
}
