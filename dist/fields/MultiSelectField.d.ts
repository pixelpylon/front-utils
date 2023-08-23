import { SelectOption } from '../types';
import React from 'react';
declare type Props = {
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
export declare const MultiSelectField: ({ initialValue, label, name, options, disabled, expanded, className, visibleNumber, }: Props) => React.JSX.Element;
export {};
