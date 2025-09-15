import React from "react";
import { calculateFee } from "@/lib/calculations";
import { PaymentMethod } from "@/types";

interface SummaryProps {
    productPrice: number;
    paymentMethod: PaymentMethod;
    installment: number;
}

export const Summary: React.FC<SummaryProps> = ({ productPrice, paymentMethod, installment }) => {
    const { fee, total, netValue } = calculateFee(productPrice, paymentMethod, installment);

    return (
        <div className="border-dashed border p-3 rounded-lg mt-4">
            <h2 className="font-bold mb-2">Resumo do Pedido</h2>
            <p>Produto: R${productPrice.toFixed(2)}</p>
            <p>Taxa Cakto: R${fee.toFixed(2)}</p>
            <p>Total: R${total.toFixed(2)}</p>
            <hr className="my-2" />
            <p>João recebe: R${netValue.toFixed(2)}</p>
        </div>
    );
};