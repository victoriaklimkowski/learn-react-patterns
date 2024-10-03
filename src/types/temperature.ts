export interface InputProps<T> {
    label: string;
    value: T;
    onValueChange: (v: T) => void;
}

export interface DisplayProps<T> {
    label: string;
    value: T;
    getValue: (x: T) => string;
}