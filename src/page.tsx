import { useEffect, useState } from "react";
import { fetchTodos, addTodo, updateTodo, deleteTodo } from "./services/todoService";
import { TodoTypes } from "./types/TodoTypes";
import Button from "./components/Button";
import InputField from "./components/InputField";

export default function Home(): JSX.Element {
    const [todos, setTodos] = useState<TodoTypes[]>([]);
    const [ newTodo, setNewTodo ] = useState("");

    useEffect(()=> {
        fetchTodos().then((todos) => {
            if (Array.isArray(todos)) {
                setTodos(todos);
            } else {
                console.error("Fetched data is not an array:", todos);
                setTodos([]);
            }
        });
    },[]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-gray-100">
            <div className="mb-4 w-full max-w-3xl flex">
                <InputField 
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add new todo"
                />
                <Button 
                    onClick={() => addTodo(newTodo, todos, setTodos)}
                    color="blue"
                    text="Add Todo"
                />
            </div>
            <div className="w-full max-w-3xl">
                {todos.map((todo: TodoTypes) => (
                    <div key={todo.id} className="flex items-center justify-between p-3 mb-2 bg-white border rounded shadow">
                        <InputField
                            value={todo.title}
                            onChange={(e) => {
                                const updatedTitle = e.target.value;
                                const updatedTodos = todos.map((t) =>
                                    t.id === todo.id ? { ...t, title: updatedTitle } : t
                                );
                                setTodos(updatedTodos);
                            }}
                        />
                        <Button
                            onClick={() => updateTodo(todo.id, todo.title)}
                            color="green"
                            text="Update"
                        />
                        <Button
                            onClick={() => deleteTodo(todo.id, todos, setTodos)}
                            color="red"
                            text="Delete"
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}