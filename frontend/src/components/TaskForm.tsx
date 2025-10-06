import { useState } from "react";
import { createTask } from "../api/taskApi";

interface Props {
  onTaskAdded: () => void;
}

export default function TaskForm({ onTaskAdded }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    await createTask(title, description);
    setTitle("");
    setDescription("");
    onTaskAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 w-1/2 rounded-md hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>
    </form>
  );
}
