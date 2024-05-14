import React from "react";

type TodoButtonProps = {
    onClick:  () => void;
    color: string;
    text: string;
};

const Button: React.FC<TodoButtonProps> = ({ onClick, color, text }) => {
    const baseStyle ="p-2 ml-2 text-white rounded shadow focus:outline-none";
    const colorStyle = `bg-${color}-500 hover:bg-${color}-600`;
    return (
        <button onClick={onClick} className={`${baseStyle} ${colorStyle}`}>
            {text}
        </button>
    );
};

export default Button;