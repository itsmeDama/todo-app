import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api/tasks";

export const getTasks = async () => {
  const res = await axios.get(API_BASE_URL);
  return res.data;
};

export const createTask = async (title: string, description: string) => {
  const res = await axios.post(API_BASE_URL, { title, description });
  return res.data;
};

export const markTaskDone = async (id: number) => {
  const res = await axios.patch(`${API_BASE_URL}/${id}/done`);
  return res.data;
};
