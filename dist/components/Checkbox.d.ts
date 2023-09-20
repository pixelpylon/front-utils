import React, { ChangeEventHandler } from 'react';
declare type Color = 'default' | 'green' | 'red';
declare type Size = 'sm' | 'default' | 'lg';
declare type Props = {
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
export declare const Checkbox: ({ id, label, error, color, size, name, checked, onChange, className, disabled, }: Props) => React.JSX.Element;
export {};
