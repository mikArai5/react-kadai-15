import React from "react";

type TodoButtonProps = {
    onClick:  () => void;
    text: string;
    style: any;
    className: string;
};

export const Button: React.FC<TodoButtonProps> = ({ onClick, text, style, className }) => {
    return (
        <>
            <button onClick={onClick} className={className} style={style}>
                {text}
            </button>
        </>
    );
};
