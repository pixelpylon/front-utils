import React, { ChangeEventHandler } from 'react';
import { SelectOption } from '../types';
type Size = 'sm' | 'default' | 'lg';
type Props = {
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
export declare const Select: ({ label, error, name, value, options, onChange, className, size, expanded, disabled, }: Props) => React.JSX.Element;
export {};
