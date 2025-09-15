import { Installment } from "@/types";

export function calculateInstallments(value: number, max: number = 12): Installment[] {
    const installments: Installment[] = [];

    for (let i = 1; i <= max; i++) {
        let fee = 0;
        if (i === 1) {
            fee = value * 0.0399; // 3.99%
        } else {
            fee = value * 0.0499 + (i - 1) * (value * 0.02); // 4.99% + 2% extra por parcela extra
        }

        const total = value + fee;
        const amount = total / i;
        const netValue = value - fee;

        installments.push({
            quantity: i,
            amount: parseFloat(amount.toFixed(2)),
            total: parseFloat(total.toFixed(2)),
            fee: parseFloat(fee.toFixed(2)),
            netValue: parseFloat(netValue.toFixed(2)),
        });
    }

    return installments;
}

export function calculateFee(value: number, method: "pix" | "card", installment: number = 1) {
    if (method === "pix") return { fee: 0, total: value, netValue: value };
    const installmentData = calculateInstallments(value, installment).find(i => i.quantity === installment)!;
    return { fee: installmentData.fee, total: installmentData.total, netValue: installmentData.netValue };
}