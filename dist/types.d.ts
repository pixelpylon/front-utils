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
export declare type QueryOptions = {
    enabled?: boolean;
    keepPreviousData?: boolean;
    onSuccess?: (data: any) => void;
};
