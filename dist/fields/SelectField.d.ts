import React from 'react';
import { SelectOption } from '../types';
declare type Props = {
    label?: string;
    name: string;
    options: SelectOption[];
    disabled?: boolean;
    expanded?: boolean;
    className?: string;
};
export declare const SelectField: ({ label, name, options, disabled, expanded, className }: Props) => React.JSX.Element;
export {};
