import React, { ChangeEventHandler } from 'react';
type Color = 'default' | 'green' | 'red';
type Size = 'sm' | 'default' | 'lg';
type Props = {
    label?: string;
    error?: string;
    size?: Size;
    color?: Color;
    name?: string;
    value?: string;
    type?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    className?: string;
    expanded?: boolean;
    disabled?: boolean;
    spellCheck?: boolean;
};
export declare const Input: ({ label, error, color, size, type, name, value, onChange, className, expanded, disabled, spellCheck, }: Props) => React.JSX.Element;
export {};
