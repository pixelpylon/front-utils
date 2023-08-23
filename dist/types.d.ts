import { ChangeEventHandler } from 'react';
export declare type SelectOption = {
    value: string;
    label: string;
};
export declare type SelectSize = 'sm' | 'default' | 'lg';
export declare type SelectProps = {
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
export declare type AlertType = 'info' | 'danger' | 'success' | 'warning' | 'dark';
declare type Permissions<Role, Permission> = Record<keyof Role, Permission>;
export declare type User<Role, Permission> = {
    id: string;
    name: string;
    email: string;
    locations: string[];
    permissions: Permissions<Role, Permission>;
};
export {};
