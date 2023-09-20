import React, { ChangeEventHandler } from 'react';
import { SelectOption } from '../types';
declare type Size = 'sm' | 'default' | 'lg';
declare type Props = {
    id?: string;
    label?: string;
    error?: string;
    name?: string;
    options: SelectOption[];
    value?: string;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    className?: string;
    size?: Size;
    expanded?: boolean;
    disabled?: boolean;
    defaultValue?: string;
};
export declare const Select: ({ id, label, error, name, value, options, onChange, className, size, expanded, disabled, }: Props) => React.JSX.Element;
export {};
