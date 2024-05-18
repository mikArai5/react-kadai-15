import { Todo } from "../types/Todo";
import classes from "./CssModules.module.scss";

// 1つのTodo、内容と移動・削除ボタン
export const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem }: { todo: Todo; toggleTodoListItemStatus: any; deleteTodoListItem: any }) => {
  // onClickイベントが発生したら、useTodoフックを呼び出す
    const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done);
    const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

    return (
    <>
        <p style={{ textDecoration: todo.done ? "line-through" : "" }}>{todo.content}</p>
        <div className={classes.btns}>
            <button className={classes.deleteBtn} onClick={handleDeleteTodoListItem}>削除</button>
            <button onClick={handleToggleTodoListItemStatus} className={classes.completeBtn} style={{ backgroundColor : todo.done ?  "#C1C1C1" : "#008CFF"}}>完了</button>
        </div>
    </>
    );
};

