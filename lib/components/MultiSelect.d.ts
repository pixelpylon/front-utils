import { ChangeEventHandler } from 'react';
import { ControlSize, SelectOptions } from '../types';
type Props = {
    id?: string;
    label?: string;
    error?: string;
    name?: string;
    options: SelectOptions;
    value?: string[];
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    className?: string;
    size?: ControlSize;
    expanded?: boolean;
    disabled?: boolean;
    visibleNumber?: number;
};
export declare const MultiSelect: ({ id, label, error, name, value: initialValues, options, onChange, visibleNumber, className, size, expanded, disabled, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
