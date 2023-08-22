import React, { ChangeEventHandler, ReactNode } from 'react';

type Color$2 = 'default' | 'green' | 'red';
type Size$5 = 'sm' | 'default' | 'lg';
type Props$8 = {
    label?: string;
    error?: string;
    size?: Size$5;
    color?: Color$2;
    name?: string;
    value?: string;
    type?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    className?: string;
    expanded?: boolean;
    disabled?: boolean;
    spellCheck?: boolean;
};
declare const Input: ({ label, error, color, size, type, name, value, onChange, className, expanded, disabled, spellCheck, }: Props$8) => React.JSX.Element;

type SelectOption = {
    value: string;
    label: string;
};
type SelectSize = 'sm' | 'default' | 'lg';
type SelectProps = {
    name?: string;
    options: SelectOption[];
    value?: string;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    className?: string;
    size?: SelectSize;
    expanded?: boolean;
    disabled?: boolean;
    defaultValue?: string;
};
type AlertType = 'info' | 'danger' | 'success' | 'warning' | 'dark';

type types_AlertType = AlertType;
type types_SelectOption = SelectOption;
type types_SelectProps = SelectProps;
type types_SelectSize = SelectSize;
declare namespace types {
  export type { types_AlertType as AlertType, types_SelectOption as SelectOption, types_SelectProps as SelectProps, types_SelectSize as SelectSize };
}

type Size$4 = 'sm' | 'default' | 'lg';
type Props$7 = {
    label?: string;
    error?: string;
    name?: string;
    options: SelectOption[];
    value?: string;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    className?: string;
    size?: Size$4;
    expanded?: boolean;
    disabled?: boolean;
    defaultValue?: string;
};
declare const Select: ({ label, error, name, value, options, onChange, className, size, expanded, disabled, }: Props$7) => React.JSX.Element;

type Size$3 = 'sm' | 'default' | 'lg';
type Props$6 = {
    label?: string;
    error?: string;
    name?: string;
    options: SelectOption[];
    value?: string[];
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    className?: string;
    size?: Size$3;
    expanded?: boolean;
    disabled?: boolean;
    defaultValue?: string;
    visibleNumber?: number;
};
declare const MultiSelect: ({ label, error, name, value, options, onChange, visibleNumber, className, size, expanded, disabled, }: Props$6) => React.JSX.Element;

type Color$1 = 'default' | 'dark' | 'green' | 'red' | 'yellow' | 'purple';
type Size$2 = 'xs' | 'sm' | 'default' | 'lg' | 'xl';
type Props$5 = {
    onSubmit?: () => void;
    onClick?: () => void;
    children: ReactNode;
    color?: Color$1;
    size?: Size$2;
    outline?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    expanded?: boolean;
    disabled?: boolean;
};
declare const Button: ({ onSubmit, onClick, children, outline, size, color, type, className, disabled, expanded, }: Props$5) => React.JSX.Element;

type Size$1 = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Props$4 = {
    children: string;
    size: Size$1;
    className?: string;
};
declare const Header$1: {
    ({ size, children, className }: Props$4): React.JSX.Element;
    H1({ children, className }: HeaderProps): React.JSX.Element;
    H2({ children, className }: HeaderProps): React.JSX.Element;
    H3({ children, className }: HeaderProps): React.JSX.Element;
    H4({ children, className }: HeaderProps): React.JSX.Element;
    H5({ children, className }: HeaderProps): React.JSX.Element;
    H6({ children, className }: HeaderProps): React.JSX.Element;
};
type HeaderProps = {
    children: string;
    className?: string;
};

type Props$3 = {
    children: string;
};
declare const Label: ({ children }: Props$3) => React.JSX.Element;

declare const Spinner: () => React.JSX.Element;

type Header = {
    key: string;
    value?: ReactNode;
};
type Row = {
    key: string;
    columns: Record<string, ReactNode>;
};
type Props$2 = {
    headers: Header[];
    rows: Row[];
};
declare const Table: ({ headers, rows }: Props$2) => React.JSX.Element;

type Color = 'default' | 'green' | 'red' | 'blue';
type Size = 'sm' | 'default' | 'lg';
type Props$1 = {
    children: string;
    size?: Size;
    className?: string;
    tag?: string;
    color?: Color;
};
declare const Text: ({ tag, color, size, children, className }: Props$1) => React.JSX.Element;

type Props = {
    type: AlertType;
    children: ReactNode;
    className?: string;
};
declare const Alert: ({ type, children, className }: Props) => React.JSX.Element;

export { Alert, Button, Header$1 as Header, Input, Label, MultiSelect, Select, Spinner, Table, Text, types as Types };
