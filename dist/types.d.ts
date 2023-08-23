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
declare type FilterValue = string | number | boolean;
declare type NumberFilter = {
    value: number;
    op: 'eq' | 'ge' | 'le';
};
declare type StringFilter = {
    value: string;
    op: 'eq';
};
declare type BooleanFilter = {
    value: string | number;
    op: 'is';
};
declare type ListFilter = {
    value: FilterValue[];
    op: 'in';
};
declare type Filter = FilterValue | FilterValue[] | NumberFilter | StringFilter | BooleanFilter | ListFilter;
declare type Filters<FilteredType> = {
    [key in keyof Partial<FilteredType> | string]: Filter;
};
export declare type BaseListParams<FilteredType> = {
    page?: number;
    limit?: number;
    filters?: Filters<FilteredType>;
};
export declare type QueryOptions = {
    enabled?: boolean;
    keepPreviousData?: boolean;
    onSuccess?: (data: any) => void;
};
export {};
