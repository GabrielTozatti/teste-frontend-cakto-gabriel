"use client";

import React, { useState } from "react";
import { product } from "@/lib/product";
import { PaymentMethod } from "@/types";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { PaymentOptions } from "@/components/PaymentOptions";
import { Summary } from "@/components/Summary";
import { formatCPF, validateCPF } from "@/lib/cpf";

export default function CheckoutPage() {
    const [email, setEmail] = useState("");
    const [emailTouched, setEmailTouched] = useState(false);

    const [cpf, setCpf] = useState("");
    const [cpfTouched, setCpfTouched] = useState(false);

    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("pix");
    const [installment, setInstallment] = useState<number>(1);
    const [loading, setLoading] = useState(false);

    const validateEmail = (value: string) => {
        if (!value) return "Email é obrigatório";
        if (!value.includes("@")) return "Email inválido";
        return undefined;
    };

    const validateCPFField = (value: string) => {
        if (!value) return undefined;
        if (!validateCPF(value)) return "CPF inválido";
        return undefined;
    };

    const emailError = emailTouched ? validateEmail(email) : undefined;
    const cpfError = cpfTouched ? validateCPFField(cpf) : undefined;

    const isButtonDisabled =
        !!validateEmail(email) ||
        !paymentMethod ||
        (paymentMethod === "card" && !installment);

    const handleSubmit = () => {
        const emailValidation = validateEmail(email);
        const cpfValidation = validateCPFField(cpf);

        if (
            emailValidation ||
            cpfValidation ||
            !paymentMethod ||
            (paymentMethod === "card" && !installment)
        ) {
            setEmailTouched(true);
            setCpfTouched(true);
            return;
        }

        setLoading(true);
        setTimeout(() => {
            alert("Compra finalizada!");
            setLoading(false);

            setEmail("");
            setEmailTouched(false);
            setCpf("");
            setCpfTouched(false);
            setPaymentMethod("pix");
            setInstallment(1);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-[#161c24] flex items-center justify-center p-4">
            <div className="bg-[#212B36] text-white p-6 rounded-lg w-full max-w-md shadow-lg">
                <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                <p className="mb-6">
                    <span className="text-[#717d9a]">De R${product.originalPrice.toFixed(2)} por{" "}</span>
                    <span className="font-bold text-[#1a9d65]">R${product.currentPrice.toFixed(2)}</span>
                </p>
                <Input
                    label="* Email"
                    value={email}
                    onChange={(val) => {
                        setEmail(val);
                        setEmailTouched(true);
                    }}
                    onFocus={() => setEmailTouched(true)}
                    type="email"
                    error={emailError}
                />
                <Input
                    label="CPF"
                    value={cpf}
                    onChange={(val) => {
                        setCpf(formatCPF(val));
                        setCpfTouched(true);
                    }}
                    onFocus={() => setCpfTouched(true)}
                    placeholder="000.000.000-00"
                    error={cpfError}
                />
                <PaymentOptions
                    paymentMethod={paymentMethod}
                    setPaymentMethod={setPaymentMethod}
                    installment={installment}
                    setInstallment={setInstallment}
                    productPrice={product.currentPrice}
                />
                <Summary
                    productPrice={product.currentPrice}
                    paymentMethod={paymentMethod}
                    installment={installment}
                />
                <div className="mt-4">
                    <Button
                        text="Finalizar Compra"
                        onClick={handleSubmit}
                        loading={loading}
                        disabled={isButtonDisabled}
                    />
                </div>
            </div>
        </div>
    );
}
