import { ChangeEventHandler } from 'react';
import { ControlSize } from '../types';
type Color = 'default' | 'green' | 'red';
type Props = {
    id?: string;
    label?: string;
    size?: ControlSize;
    color?: Color;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    className?: string;
    expanded?: boolean;
    disabled?: boolean;
};
export declare const SearchInput: ({ id, label, color, size, value, onChange, className, expanded, disabled, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
