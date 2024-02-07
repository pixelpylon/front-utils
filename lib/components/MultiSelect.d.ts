import { ChangeEventHandler } from 'react';
import { SelectOption } from '../types';
type Size = 'sm' | 'default' | 'lg';
type Props = {
    id?: string;
    label?: string;
    error?: string;
    name?: string;
    options: SelectOption[];
    value?: string[];
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    className?: string;
    size?: Size;
    expanded?: boolean;
    disabled?: boolean;
    visibleNumber?: number;
};
export declare const MultiSelect: ({ id, label, error, name, value: initialValues, options, onChange, visibleNumber, className, size, expanded, disabled, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
