import React from "react";

type InputFieldProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
};

export const InputField: React.FC<InputFieldProps> = ({ value, onChange, className }) => {
    return (
        <input 
            className={className}
            type="text"
            id="text"
            onChange={onChange}
            value={value}
        />
    );
};
