import React from "react";
import { PaymentMethod } from "@/types";
import { Installments } from "./Installments";

interface PaymentOptionsProps {
    paymentMethod: PaymentMethod;
    setPaymentMethod: (value: PaymentMethod) => void;
    installment: number;
    setInstallment: (value: number) => void;
    productPrice: number;
}

export const PaymentOptions: React.FC<PaymentOptionsProps> = ({
      paymentMethod,
      setPaymentMethod,
      installment,
      setInstallment,
      productPrice,
  }) => {
    return (
        <div className="flex flex-col gap-2">
            <button
                onClick={() => setPaymentMethod("pix")}
                className={`cursor-pointer py-3 border transition rounded-lg ${paymentMethod === "pix" ? "text-[#161c24] font-semibold bg-[#1a9d65] border-[#101a16] hover:bg-[]" : "text-[#101a16] font-semibold bg-[#8dd9b8] border-[#8dd9b8]"}`}
            >
                PIX (Taxa 0% 🔥)
            </button>
            <button
                onClick={() => setPaymentMethod("card")}
                className={`cursor-pointer py-3 border transition rounded ${paymentMethod === "card" ? " font-semibold bg-[#943ec6d4] border-[#ac5ad5] " : "text-[#ac5ad5]"}`}
            >
                Cartão
            </button>
            {paymentMethod === "card" && (
                <Installments productPrice={productPrice} selected={installment} onSelect={setInstallment} />
            )}
        </div>
    );
};