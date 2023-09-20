import React from 'react';
declare type Color = 'default' | 'green' | 'red' | 'blue';
declare type Size = 'sm' | 'default' | 'lg';
declare type Props = {
    children: string;
    size?: Size;
    className?: string;
    tag?: string;
    color?: Color;
    for?: string;
};
export declare const Text: ({ tag, color, size, children, className, ...other }: Props) => React.JSX.Element;
export {};
