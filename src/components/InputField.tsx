import React from "react";

type InputFieldProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
};

const InputField: React.FC<InputFieldProps> = ({ value, onChange, placeholder, className }) => {
    return (
        <input 
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={className || "flex-1 p-2 mr-2 border rounded shadow text-black focus:outline-none"}
        />
    );
};

export default InputField;