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
    <div className="border rounded-lg p-4 shadow-sm bg-gray-50 flex justify-between items-start mb-3">
      <div>
        <h3 className="font-bold text-lg">{task.title}</h3>
        <p className="text-gray-600">{task.description}</p>
      </div>
      <button
        onClick={handleDone}
        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
      >
        Done
      </button>
    </div>
  );
}
