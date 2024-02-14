import { ChangeEventHandler, MutableRefObject } from 'react';
import { SelectOptions } from '../types';
type Size = 'sm' | 'default' | 'lg';
type Props = {
    id?: string;
    label?: string;
    error?: string;
    name?: string;
    options: SelectOptions;
    value?: string;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    className?: string;
    size?: Size;
    expanded?: boolean;
    disabled?: boolean;
    defaultValue?: string;
    visibleNumber?: number;
};
export declare const getDistances: (selectRef: MutableRefObject<HTMLDivElement | null>) => {
    toTop: number;
    toBottom: number;
};
export declare const getTextClasses: (size: Size) => "text-xs" | "text-sm" | "text-base";
export declare const getInputPaddingClasses: (size: Size) => "p-1" | "p-1.5" | "p-3";
export declare const getOptionPaddingClasses: (size: Size) => "p-2" | "p-2.5" | "p-4";
export declare const getIconClasses: (size: Size) => "h-4 w-4" | "h-5 w-5" | "h-6 w-6";
export declare const getOptionHeight: (size: Size) => 32 | 40 | 56;
export declare const Select: ({ id, label, error, name, value: initialValue, options, onChange, visibleNumber, className, size, expanded, disabled, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
