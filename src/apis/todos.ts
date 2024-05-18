import axios from "axios";
import { Todo } from "../types/Todo";

const todoDataUrl = "http://localhost:3000/todos";

// 全TODOリスト取得
export const getAllTodosData = async () => {
    const response = await axios.get(todoDataUrl);
    return response.data;
};
// 1件のTODOを新規作成
export const addTodoData = async (todo: Todo) => {
    const response = await axios.post(todoDataUrl, todo);
    return response.data;
};

// 1件のTODOを更新
export const updateTodoData = async (id: string, todo: Todo) => {
  const response = await axios.put(`${todoDataUrl}/${id}`, todo);
  return response.data;
};

// 1件のTODOを削除
export const deleteTodoData = async (id: string) => {
    await axios.delete(`${todoDataUrl}/${id}`);
    return id;
};