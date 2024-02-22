import { ChangeEventHandler, MutableRefObject } from 'react';
import { ControlSize, SelectOptions, SelectOption } from '../types';
type Props = {
    id?: string;
    label?: string;
    error?: string;
    name?: string;
    options: SelectOptions;
    value?: string;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    className?: string;
    size?: ControlSize;
    expanded?: boolean;
    disabled?: boolean;
    defaultValue?: string;
    visibleNumber?: number;
    notSelectedOption?: boolean | SelectOption;
};
export declare const getDistances: (selectRef: MutableRefObject<HTMLDivElement | null>) => {
    toTop: number;
    toBottom: number;
};
export declare const getTextClasses: (size: ControlSize) => "text-xs" | "text-sm" | "text-base";
export declare const getInputPaddingClasses: (size: ControlSize) => "p-1" | "p-1.5" | "p-3";
export declare const getOptionPaddingClasses: (size: ControlSize) => "p-2" | "p-2.5" | "p-4";
export declare const getIconClasses: (size: ControlSize) => "h-4 w-4" | "h-5 w-5" | "h-6 w-6";
export declare const getOptionHeight: (size: ControlSize) => 32 | 40 | 56;
export declare const Select: ({ id, label, error, name, value: initialValue, options, onChange, visibleNumber, className, size, expanded, disabled, notSelectedOption, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
