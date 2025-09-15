export interface Product {
    id: number;
    name: string;
    originalPrice: number;
    currentPrice: number;
    producer: string;
    format: string;
    deliveryTime: string;
}

export type PaymentMethod = "pix" | "card";

export interface Installment {
    quantity: number;
    amount: number;
    total: number;
    fee: number;
    netValue: number;
}