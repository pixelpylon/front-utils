import React from 'react';
type Color = 'default' | 'green' | 'red' | 'blue';
type Size = 'sm' | 'default' | 'lg';
type Props = {
    children: string;
    size?: Size;
    className?: string;
    tag?: string;
    color?: Color;
};
export declare const Text: ({ tag, color, size, children, className }: Props) => React.JSX.Element;
export {};
