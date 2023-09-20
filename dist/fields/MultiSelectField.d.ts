import { SelectOption } from '../types';
import React from 'react';
declare type Props = {
    id?: string;
    initialValue?: string[];
    label?: string;
    name: string;
    type?: string;
    options: SelectOption[];
    disabled?: boolean;
    expanded?: boolean;
    className?: string;
    visibleNumber?: number;
};
export declare const MultiSelectField: ({ id, initialValue, label, name, options, disabled, expanded, className, visibleNumber, }: Props) => React.JSX.Element;
export {};
