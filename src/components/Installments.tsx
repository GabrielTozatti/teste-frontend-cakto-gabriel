import React from "react";
import { calculateInstallments } from "@/lib/calculations";

interface InstallmentsProps {
    productPrice: number;
    selected: number;
    onSelect: (installment: number) => void;
}

export const Installments: React.FC<InstallmentsProps> = ({ productPrice, selected, onSelect }) => {
    const installments = calculateInstallments(productPrice);

    return (
        <div className="flex flex-col gap-2 mt-2">
            {installments.map(inst => (
                <button
                    key={inst.quantity}
                    onClick={() => onSelect(inst.quantity)}
                    className={`cursor-pointer text-left p-2 border rounded ${selected === inst.quantity ? " font-medium bg-[#ac5ad563] border-[#ac5ad5] text-white" : "border-gray-300"}`}
                >
                    {inst.quantity}x de R${inst.amount.toFixed(2)} - Total R${inst.total.toFixed(2)}
                </button>
            ))}
        </div>
    );
};