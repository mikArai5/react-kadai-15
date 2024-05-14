import { TodoTypes } from "../types/TodoTypes";

type TodoActionParams = {
    todos: TodoTypes[];
    setTodos: (todos: TodoTypes[]) => void;
};

type AddTodoParams = TodoActionParams & {
    newTodos: string;
};

type DeleteTodoParams = TodoActionParams & {
    id: string;
};

const API_URL = "";

export const fetchTodos = (): Promise<TodoTypes[]> => {
    return fetch(API_URL)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => data.todos || [])
    .catch((error) => {
        console.error("Error fetching todos:", error);
        return[];
    });
};

export const addTodo = ({ newTodo, todos, setTodos }: AddTodoParams): void => {
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTodo }),
    })
    .then((response) => response.json())
    .then((data) => setTodos([...todos, data.todo]))
    .catch((error) => console.error("Error adding todo:", error));
};

export const updateTodo = (id: string, title: string): Promise<void> => {
    return fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
    })
    .then((response) => response.json())
    .catch((error) => {
        console.error("Error updating todo:", error);
        throw error;
    });
};

export const deleteTodo = ({ id, todos, setTodos }: DeleteTodoParams): void => {
    fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    })
    .then(() => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
    })
    .catch((error) => console.error("Error deleting todo:", error));
};