import { ChangeEventHandler } from 'react';
export type SelectOption = {
    value: string;
    label: string;
};
export type SelectOptions = SelectOption[] | string[] | number[];
export type ControlSize = 'sm' | 'default' | 'lg';
export type SelectProps = {
    name?: string;
    options: SelectOptions;
    value?: string;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    className?: string;
    size?: ControlSize;
    expanded?: boolean;
    disabled?: boolean;
    defaultValue?: string;
};
export type AlertType = 'info' | 'danger' | 'success' | 'warning' | 'dark';
export type QueryOptions<ResponseData, ErrorData = unknown> = {
    enabled?: boolean;
    keepPreviousData?: boolean;
    refetchOnMount?: boolean;
    onSuccess?: (data: ResponseData) => void;
    onError?: (error: ErrorData) => void;
    initialData?: ResponseData;
};
export type PaginatedListResponse<ListResponse extends unknown[]> = {
    list: ListResponse;
    nextCursor?: string;
};
