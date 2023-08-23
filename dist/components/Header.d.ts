import React from 'react';
declare type Size = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
declare type Props = {
    children: string;
    size: Size;
    className?: string;
};
export declare const Header: {
    ({ size, children, className }: Props): React.JSX.Element;
    H1({ children, className }: HeaderProps): React.JSX.Element;
    H2({ children, className }: HeaderProps): React.JSX.Element;
    H3({ children, className }: HeaderProps): React.JSX.Element;
    H4({ children, className }: HeaderProps): React.JSX.Element;
    H5({ children, className }: HeaderProps): React.JSX.Element;
    H6({ children, className }: HeaderProps): React.JSX.Element;
};
declare type HeaderProps = {
    children: string;
    className?: string;
};
export {};
