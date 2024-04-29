import { ChangeEventHandler } from 'react';
type Color = 'default' | 'green' | 'red';
type Size = 'sm' | 'default' | 'lg';
type Props = {
    id?: string;
    label?: string;
    error?: string;
    size?: Size;
    color?: Color;
    name?: string;
    checked?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    className?: string;
    disabled?: boolean;
};
export declare const Checkbox: ({ id, label, error, color, size, name, checked: initialChecked, onChange, className, disabled, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
