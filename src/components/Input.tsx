import React from "react";

interface InputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    placeholder?: string;
    error?: string;
    mask?: (value: string) => string;
    onBlur?: () => void;
    onFocus?: () => void;
}

export const Input: React.FC<InputProps> = ({ label, value, onChange, type = "text", placeholder, error, mask }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value;
        if (mask) val = mask(val);
        onChange(val);
    };

    return (
        <div className="flex flex-col mb-4">
            <label className="mb-1 font-medium">{label}</label>
            <input
                type={type}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className={`border focus:outline-0 rounded-lg p-3 ${error ? "border-red-500" : "border-gray-300"}`}
            />
            {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
        </div>
    );
};