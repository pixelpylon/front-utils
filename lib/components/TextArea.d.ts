import { ChangeEventHandler } from 'react';
import { ControlSize } from '../types';
type Color = 'default' | 'green' | 'red';
type Props = {
    id?: string;
    label?: string;
    error?: string;
    size?: ControlSize;
    color?: Color;
    name?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
    className?: string;
    expanded?: boolean;
    disabled?: boolean;
    spellCheck?: boolean;
};
export declare const TextArea: ({ id, label, error, color, size, name, value, onChange, className, expanded, disabled, spellCheck, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
