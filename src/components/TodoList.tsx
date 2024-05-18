import { TodoTitle } from "./TodoTitle";
import { TodoItem } from "./TodoItem";
import { Todo } from "../types/Todo";
import classes from "./CssModules.module.scss";

// TodoItemをループして表示
// todoListが0件の場合、タイトルとTODOリストを表示しない
export const TodoList = ({
    todoList,
    toggleTodoListItemStatus,
    deleteTodoListItem,
}: {
    todoList: Todo[];
    toggleTodoListItemStatus: (id: string, status: boolean) => void;
    deleteTodoListItem: (id: string) => void;
    title: string;
    as: string;
}) => {
    return (
    <>
        {todoList.length !== 0 && (
        <>
            <TodoTitle />
            <ul id="taskList" className={classes.todoListUl}>
                {todoList.map((todo) => (
                    <li key={todo.id}>
                        <TodoItem todo={todo} key={todo.id} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem}/>
                    </li>
                ))}
            </ul>
        </>
        )}
    </>
    );
};

