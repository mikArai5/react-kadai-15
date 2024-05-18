import { RefObject, useState } from "react";
import classes from "./CssModules.module.scss";

export const TodoAdd = ({ buttonText, inputEl, handleAddTodoListItem }: { buttonText: string; inputEl: RefObject<HTMLTextAreaElement>; handleAddTodoListItem: () => void }) => {
    const [inputText, setInputText] = useState("");
    const handleChange = (e:any) => {
        setInputText(e.target.value);
    }

    return (
    <>
        <div className={classes.addArea}>
            <textarea ref={inputEl} className={classes.addTodo} onChange={handleChange} value={inputText}/>
            <button onClick={handleAddTodoListItem} className={classes.addBtn} style={{ backgroundColor : inputText ? "#008CFF" : "#C1C1C1"}}>{buttonText}</button>
        </div>
    </>
    );
};

