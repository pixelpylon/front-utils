import React from 'react';
import { SelectOption } from '../types';
declare type Props = {
    id?: string;
    label?: string;
    name: string;
    options: SelectOption[];
    disabled?: boolean;
    expanded?: boolean;
    className?: string;
};
export declare const SelectField: ({ id, label, name, options, disabled, expanded, className }: Props) => React.JSX.Element;
export {};
