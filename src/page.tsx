import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { InputField } from "./components/InputField";
import classes from "./components/CssModules.module.scss";

export default function Home(): JSX.Element {
    const taskList:any = [];
    const [tasks, setTasks] = useState(taskList);

    const addTodo = () => {
        let value = (document.getElementById("text") as HTMLInputElement).value;
        if(value === '') return;
        let next = tasks.length + 1;
        setTasks((todos: any) => [...todos,{id: next, task:value, isFinish: false}]);
        setInputText("");
    }

    const deleteTodo = (id: string) => {
        const index = tasks.findIndex((v: any)=> v.id === id);
        const newTask = [...tasks];
        newTask.splice(index,1);
        setTasks(newTask);
    }

    const completeTodo = (id: string) => {
        
        let newTasks = tasks.map((task: any)=> {
            if(task.id === id) {
                task.isFinish = true;
            }
            return task;
        })
        setTasks(newTasks);
        
    }

    const [inputText, setInputText] = useState("");

    const handleChange = (e:any) => {
        setInputText(e.target.value);
    }


    // localStorage 保存
    useEffect(() =>{
        const temp = localStorage.getItem("keepTodo");
        const loadedTodo = JSON.parse(temp || "");
        if (loadedTodo) {
            setTasks(loadedTodo);
        }
    },[]);

    useEffect(() => {
        const temp = JSON.stringify(tasks);
        localStorage.setItem("keepTodo", temp);
    },[tasks]);

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>今日やること</h2>
            <div className={classes.addArea}>
                <InputField
                    className={classes.addTodo}
                    onChange={handleChange}
                    value={inputText}
                />
                <Button
                    className={classes.addBtn}
                    text="追加"
                    onClick={addTodo}
                    style={{ backgroundColor : inputText ? "#008CFF" : "#C1C1C1"}}
                />
            </div>
            <ul id="taskList" className={classes.todoListUl}>
                {tasks.map((todo: any)=>(
                    <li key={todo.id}>
                        <p id="todoTask" style={{ textDecoration: todo.isFinish ? "line-through" : "" }}>{todo.task}</p>
                        <div id="taskBtns" className={classes.btns}>
                            <Button
                                style={{ backgroundColor: "#FF3700" }}
                                className={classes.deleteBtn} 
                                onClick={()=>deleteTodo(todo.id)}
                                text="削除"
                            />
                            <Button 
                                className={classes.completeBtn}
                                onClick={()=>completeTodo(todo.id)}
                                style={{ backgroundColor : todo.isFinish ?  "#C1C1C1" : "#008CFF"}}
                                text="完了"
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}