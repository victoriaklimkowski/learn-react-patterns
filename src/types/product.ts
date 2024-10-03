import { ChangeEvent } from "react";

export type Product = {
    name: string;
    price: number;
    rating: number;
};

export type StrategPickerProps = {
    sortStrategy: string, 
    handleSortStrategyChange: (s: ChangeEvent<HTMLSelectElement>) => void
}