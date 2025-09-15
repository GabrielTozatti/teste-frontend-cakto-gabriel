import React from "react";

interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, disabled, loading }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={`w-full mt-5 py-3 rounded-lg text-white font-bold ${
                disabled || loading ? "bg-gray-400" : "bg-[#0f7865] hover:bg-[#0b6856] shadow cursor-pointer"
            }`}
        >
            {loading ? "Carregando..." : text}
        </button>
    );
};