import { ReactNode } from 'react';
type Color = 'default' | 'dark' | 'green' | 'red' | 'yellow' | 'purple';
export type ButtonSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl';
type Props = {
    onSubmit?: () => void;
    onClick?: () => void;
    children: ReactNode;
    color?: Color;
    size?: ButtonSize;
    outline?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    expanded?: boolean;
    disabled?: boolean;
};
export declare const Button: ({ onSubmit, onClick, children, outline, size, color, type, className, disabled, expanded, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
