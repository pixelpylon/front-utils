import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode, ChangeEventHandler, ChangeEvent } from 'react';
import { User, ListParams, PaginatedListParams } from '@exp1/common-utils';
import { AxiosError, AxiosInstance } from 'axios';
import * as react_query from 'react-query';
import { InfiniteData, InfiniteQueryObserverResult } from 'react-query';

type SelectOption = {
    value: string;
    label: ReactNode;
};
type SelectOptions = SelectOption[] | string[] | number[];
type ControlSize = 'sm' | 'default' | 'lg';
type SelectProps = {
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
type AlertType = 'info' | 'danger' | 'success' | 'warning' | 'dark';
type QueryOptions<ResponseData, ErrorData = unknown> = {
    enabled?: boolean;
    keepPreviousData?: boolean;
    refetchOnMount?: boolean;
    onSuccess?: (data: ResponseData) => void;
    onError?: (error: ErrorData) => void;
    initialData?: ResponseData;
};
type PaginatedListResponse<ListResponse extends unknown[]> = {
    list: ListResponse;
    nextCursor?: string;
};

type types_d_AlertType = AlertType;
type types_d_ControlSize = ControlSize;
type types_d_PaginatedListResponse<ListResponse extends unknown[]> = PaginatedListResponse<ListResponse>;
type types_d_QueryOptions<ResponseData, ErrorData = unknown> = QueryOptions<ResponseData, ErrorData>;
type types_d_SelectOption = SelectOption;
type types_d_SelectOptions = SelectOptions;
type types_d_SelectProps = SelectProps;
declare namespace types_d {
  export type { types_d_AlertType as AlertType, types_d_ControlSize as ControlSize, types_d_PaginatedListResponse as PaginatedListResponse, types_d_QueryOptions as QueryOptions, types_d_SelectOption as SelectOption, types_d_SelectOptions as SelectOptions, types_d_SelectProps as SelectProps };
}

type Color$5 = 'default' | 'green' | 'red';
type Props$p = {
    id?: string;
    label?: string;
    error?: string;
    size?: ControlSize;
    color?: Color$5;
    name?: string;
    value?: string;
    type?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    className?: string;
    expanded?: boolean;
    disabled?: boolean;
    spellCheck?: boolean;
    min?: number;
    max?: number;
};
declare const Input: ({ id, label, error, color, size, type, name, value, min, max, onChange, className, expanded, disabled, spellCheck, }: Props$p) => react_jsx_runtime.JSX.Element;

type Color$4 = 'default' | 'green' | 'red';
type Props$o = {
    id?: string;
    label?: string;
    size?: ControlSize;
    color?: Color$4;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    className?: string;
    expanded?: boolean;
    disabled?: boolean;
};
declare const SearchInput: ({ id, label, color, size, value, onChange, className, expanded, disabled, }: Props$o) => react_jsx_runtime.JSX.Element;

type Color$3 = 'default' | 'green' | 'red';
type Size$2 = 'sm' | 'default' | 'lg';
type Props$n = {
    id?: string;
    label?: string;
    error?: string;
    size?: Size$2;
    color?: Color$3;
    name?: string;
    checked?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    className?: string;
    disabled?: boolean;
};
declare const Checkbox: ({ id, label, error, color, size, name, checked: initialChecked, onChange, className, disabled, }: Props$n) => react_jsx_runtime.JSX.Element;

type Props$m = {
    name?: string;
    leftLabel?: ReactNode;
    rightLabel?: ReactNode;
    checked?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
declare const Switcher: ({ name, leftLabel, rightLabel, checked: initialChecked, onChange }: Props$m) => react_jsx_runtime.JSX.Element;

type Props$l = {
    id?: string;
    label?: string;
    error?: string;
    name?: string;
    options: SelectOptions;
    value?: string;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    className?: string;
    size?: ControlSize;
    expanded?: boolean;
    disabled?: boolean;
    defaultValue?: string;
    visibleNumber?: number;
    notSelectedOption?: boolean | SelectOption;
    hideSeparator?: boolean;
};
declare const Select: ({ id, label, error, name, value: initialValue, options, onChange, visibleNumber, className, size, expanded, disabled, notSelectedOption, hideSeparator, }: Props$l) => react_jsx_runtime.JSX.Element;

type Props$k = {
    id?: string;
    label?: string;
    error?: string;
    name?: string;
    options: SelectOptions;
    value?: string[];
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    className?: string;
    size?: ControlSize;
    expanded?: boolean;
    disabled?: boolean;
    visibleNumber?: number;
    hideSeparator?: boolean;
};
declare const MultiSelect: ({ id, label, error, name, value: initialValues, options, onChange, visibleNumber, className, size, expanded, disabled, hideSeparator }: Props$k) => react_jsx_runtime.JSX.Element;

type Color$2 = 'default' | 'dark' | 'green' | 'red' | 'yellow' | 'purple';
type ButtonSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl';
type Props$j = {
    onSubmit?: () => void;
    onClick?: () => void;
    children: ReactNode;
    color?: Color$2;
    size?: ButtonSize;
    outline?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    expanded?: boolean;
    disabled?: boolean;
};
declare const Button: ({ onSubmit, onClick, children, outline, size, color, type, className, disabled, expanded, }: Props$j) => react_jsx_runtime.JSX.Element;

type Size$1 = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Props$i = {
    children: string;
    size: Size$1;
    className?: string;
};
declare const Header$1: {
    ({ size, children, className }: Props$i): react_jsx_runtime.JSX.Element;
    H1({ children, className }: HeaderProps): react_jsx_runtime.JSX.Element;
    H2({ children, className }: HeaderProps): react_jsx_runtime.JSX.Element;
    H3({ children, className }: HeaderProps): react_jsx_runtime.JSX.Element;
    H4({ children, className }: HeaderProps): react_jsx_runtime.JSX.Element;
    H5({ children, className }: HeaderProps): react_jsx_runtime.JSX.Element;
    H6({ children, className }: HeaderProps): react_jsx_runtime.JSX.Element;
};
type HeaderProps = {
    children: string;
    className?: string;
};

type Props$h = {
    htmlFor?: string;
    children: string;
    className?: string;
};
declare const Label: ({ htmlFor, children, className }: Props$h) => react_jsx_runtime.JSX.Element;

declare const Spinner: () => react_jsx_runtime.JSX.Element;

type Header = {
    key: string;
    value?: ReactNode;
};
type Row = {
    key: string;
    columns: Record<string, ReactNode>;
};
type Props$g = {
    headers: Header[];
    rows: Row[];
    showHeader?: boolean;
    className?: string;
    tableClassName?: string;
    headTrClassName?: string;
    headThClassName?: string;
    bodyTrClassName?: string;
    bodyTdClassName?: string;
    bodyThClassName?: string;
    getBodyTr?: (row: Row, rows: Row[], headers: Header[]) => ReactNode;
};
declare const Table: ({ headers, rows, showHeader, className, tableClassName, headTrClassName, headThClassName, bodyTrClassName, bodyTdClassName, bodyThClassName, getBodyTr, }: Props$g) => react_jsx_runtime.JSX.Element;

type Color$1 = 'default' | 'green' | 'red' | 'blue';
type Size = 'sm' | 'default' | 'lg';
type Weight = 'normal' | 'medium' | 'semibold';
type Props$f = {
    children: string;
    size?: Size;
    className?: string;
    tag?: string;
    color?: Color$1;
    htmlFor?: string;
    weight?: Weight;
};
declare const Text: ({ tag, color, size, weight, children, className, ...other }: Props$f) => react_jsx_runtime.JSX.Element;

type Props$e = {
    type: AlertType;
    children: ReactNode;
    className?: string;
};
declare const Alert: ({ type, children, className }: Props$e) => react_jsx_runtime.JSX.Element;

type LinkProps = {
    to: string;
};
type ButtonProps = {
    onClick: () => void;
};
type Props$d = (LinkProps | ButtonProps) & {
    children: string;
    className?: string;
};
declare const StandardLink: (props: Props$d) => react_jsx_runtime.JSX.Element;

type Props$c = {
    to: string;
};
declare const EditLink: ({ to }: Props$c) => react_jsx_runtime.JSX.Element;

type ToasterEvent = {
    type: AlertType;
    message: string;
};
type KeyedToasterEvent = ToasterEvent & {
    key: string;
};
type Props$b = {
    events: KeyedToasterEvent[];
    className?: string;
};
declare const Toaster: ({ events, className }: Props$b) => react_jsx_runtime.JSX.Element;

type Props$a = {
    error: any;
    className?: string;
};
declare const Failure: ({ error, className }: Props$a) => react_jsx_runtime.JSX.Element;

type Props$9 = {
    className?: string;
    children: ReactNode;
    onClick?: () => void;
};
declare const Backdrop: ({ className, children, onClick }: Props$9) => react_jsx_runtime.JSX.Element;

type Color = 'default' | 'green' | 'red';
type TextAreaProps = {
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
    rows?: number;
    cols?: number;
};
declare const TextArea: ({ id, label, error, color, size, name, value, onChange, className, expanded, disabled, spellCheck, rows, cols, }: TextAreaProps) => react_jsx_runtime.JSX.Element;

type Props$8 = {
    className?: string;
    modalClassName?: string;
    bodyClassName?: string;
    onClose?: () => void;
    title?: string;
    subtitle?: string;
    children: ReactNode;
    fullscreen?: boolean;
};
declare const Modal: ({ className, modalClassName, bodyClassName, onClose, title, subtitle, children, fullscreen, }: Props$8) => react_jsx_runtime.JSX.Element;

declare const index_d$4_Alert: typeof Alert;
declare const index_d$4_Backdrop: typeof Backdrop;
declare const index_d$4_Button: typeof Button;
declare const index_d$4_Checkbox: typeof Checkbox;
declare const index_d$4_EditLink: typeof EditLink;
declare const index_d$4_Failure: typeof Failure;
declare const index_d$4_Input: typeof Input;
declare const index_d$4_Label: typeof Label;
declare const index_d$4_Modal: typeof Modal;
declare const index_d$4_MultiSelect: typeof MultiSelect;
declare const index_d$4_SearchInput: typeof SearchInput;
declare const index_d$4_Select: typeof Select;
declare const index_d$4_Spinner: typeof Spinner;
declare const index_d$4_StandardLink: typeof StandardLink;
declare const index_d$4_Switcher: typeof Switcher;
declare const index_d$4_Table: typeof Table;
declare const index_d$4_Text: typeof Text;
declare const index_d$4_TextArea: typeof TextArea;
declare const index_d$4_Toaster: typeof Toaster;
declare namespace index_d$4 {
  export { index_d$4_Alert as Alert, index_d$4_Backdrop as Backdrop, index_d$4_Button as Button, index_d$4_Checkbox as Checkbox, index_d$4_EditLink as EditLink, index_d$4_Failure as Failure, Header$1 as Header, index_d$4_Input as Input, index_d$4_Label as Label, index_d$4_Modal as Modal, index_d$4_MultiSelect as MultiSelect, index_d$4_SearchInput as SearchInput, index_d$4_Select as Select, index_d$4_Spinner as Spinner, index_d$4_StandardLink as StandardLink, index_d$4_Switcher as Switcher, index_d$4_Table as Table, index_d$4_Text as Text, index_d$4_TextArea as TextArea, index_d$4_Toaster as Toaster };
}

type Props$7 = {
    children: ReactNode;
};
declare const createUserProvider: (ssoDomain: string, useUserQuery: (params: {
    onSuccess: (user: User) => void;
    onError: (error: AxiosError) => void;
}) => void) => {
    ({ children }: Props$7): react_jsx_runtime.JSX.Element;
    useUser(): User;
};

type Props$6 = {
    children: ReactNode;
};
declare const ToasterProvider: {
    ({ children }: Props$6): react_jsx_runtime.JSX.Element;
    useToasterMessageAdder(): (event: ToasterEvent) => void;
};

type Props$5 = {
    children: ReactNode;
};
declare const WaitingProvider: {
    ({ children }: Props$5): react_jsx_runtime.JSX.Element;
    useIsWaiting(): boolean;
    useWaitingMutation(): {
        addWaiter: (name: string) => void;
        removeWaiter: (name: string) => void;
    };
};

declare const index_d$3_ToasterProvider: typeof ToasterProvider;
declare const index_d$3_WaitingProvider: typeof WaitingProvider;
declare const index_d$3_createUserProvider: typeof createUserProvider;
declare namespace index_d$3 {
  export { index_d$3_ToasterProvider as ToasterProvider, index_d$3_WaitingProvider as WaitingProvider, index_d$3_createUserProvider as createUserProvider };
}

declare class CrudApi<CreateParams, UpdateParams extends {
    id: string;
}, ListResponse extends unknown[], ItemResponse, CreateResponse, UpdateResponse> {
    protected readonly entityApiPath: string;
    protected readonly axiosInstance: AxiosInstance;
    constructor(entityApiPath: string, axiosInstance: AxiosInstance);
    list({ filters, ordering, limit }: ListParams): Promise<ListResponse>;
    paginatedList({ filters, ordering, limit, cursor }: PaginatedListParams): Promise<PaginatedListResponse<ListResponse>>;
    item(id: string): Promise<ItemResponse>;
    create(params: CreateParams): Promise<CreateResponse>;
    update(params: UpdateParams): Promise<UpdateResponse>;
    remove(id: string): Promise<void>;
}

type WithAdditionalQueryKeyPart<T> = T & {
    additionalQueryKeyPart?: any;
};
declare class CrudHooks<CreateParams, UpdateParams extends {
    id: string;
}, ListResponse extends unknown[], ItemResponse, CreateResponse, UpdateResponse, CrudApiInstance extends CrudApi<CreateParams, UpdateParams, ListResponse, ItemResponse, CreateResponse, UpdateResponse> = CrudApi<CreateParams, UpdateParams, ListResponse, ItemResponse, CreateResponse, UpdateResponse>> {
    protected readonly entityKey: string;
    protected readonly entityName: string;
    protected readonly crudApi: CrudApiInstance;
    constructor(entityKey: string, entityName: string, crudApi: CrudApiInstance);
    useCreateMutation(): react_query.UseMutationResult<CreateResponse, unknown, CreateParams, unknown>;
    useUpdateMutation(): react_query.UseMutationResult<UpdateResponse, unknown, UpdateParams, unknown>;
    useRemoveMutation(): react_query.UseMutationResult<unknown, unknown, string, unknown>;
    useItemQuery(id: string, options?: QueryOptions<ItemResponse>): react_query.UseQueryResult<ItemResponse, unknown>;
    useListQuery({ filters, ordering, limit }?: ListParams, options?: WithAdditionalQueryKeyPart<QueryOptions<ListResponse>>): react_query.UseQueryResult<ListResponse, unknown>;
    usePaginatedListQuery({ filters, ordering, limit }?: ListParams, options?: WithAdditionalQueryKeyPart<QueryOptions<InfiniteData<PaginatedListResponse<ListResponse>>>>): react_query.UseInfiniteQueryResult<PaginatedListResponse<ListResponse>, unknown>;
}

type index_d$2_CrudApi<CreateParams, UpdateParams extends {
    id: string;
}, ListResponse extends unknown[], ItemResponse, CreateResponse, UpdateResponse> = CrudApi<CreateParams, UpdateParams, ListResponse, ItemResponse, CreateResponse, UpdateResponse>;
declare const index_d$2_CrudApi: typeof CrudApi;
type index_d$2_CrudHooks<CreateParams, UpdateParams extends {
    id: string;
}, ListResponse extends unknown[], ItemResponse, CreateResponse, UpdateResponse, CrudApiInstance extends CrudApi<CreateParams, UpdateParams, ListResponse, ItemResponse, CreateResponse, UpdateResponse> = CrudApi<CreateParams, UpdateParams, ListResponse, ItemResponse, CreateResponse, UpdateResponse>> = CrudHooks<CreateParams, UpdateParams, ListResponse, ItemResponse, CreateResponse, UpdateResponse, CrudApiInstance>;
declare const index_d$2_CrudHooks: typeof CrudHooks;
declare namespace index_d$2 {
  export { index_d$2_CrudApi as CrudApi, index_d$2_CrudHooks as CrudHooks };
}

type Props$4 = {
    id?: string;
    label?: string;
    name: string;
    options: SelectOptions;
    disabled?: boolean;
    expanded?: boolean;
    className?: string;
    size?: ControlSize;
    notSelectedOption?: boolean | SelectOption;
    hideSeparator?: boolean;
};
declare const SelectField: ({ name, ...other }: Props$4) => react_jsx_runtime.JSX.Element;

type Props$3 = {
    id?: string;
    initialValue?: string[];
    label?: string;
    name: string;
    type?: string;
    options: SelectOptions;
    disabled?: boolean;
    expanded?: boolean;
    className?: string;
    visibleNumber?: number;
    size?: ControlSize;
    hideSeparator?: boolean;
};
declare const MultiSelectField: ({ id, initialValue, label, name, options, disabled, expanded, className, visibleNumber, size, hideSeparator, }: Props$3) => react_jsx_runtime.JSX.Element;

type Props$2 = {
    id?: string;
    label?: string;
    name: string;
    type?: string;
    disabled?: boolean;
    expanded?: boolean;
    spellCheck?: boolean;
    className?: string;
    min?: number;
    max?: number;
    size?: ControlSize;
    parse?: (value: any) => any;
};
declare const InputField: ({ id, label, name, type, disabled, expanded, className, spellCheck, min, max, parse, size }: Props$2) => react_jsx_runtime.JSX.Element;

type Props$1 = {
    id?: string;
    label?: string;
    name: string;
    disabled?: boolean;
    className?: string;
};
declare const CheckboxField: ({ id, label, name, disabled, className }: Props$1) => react_jsx_runtime.JSX.Element;

type Props = Omit<TextAreaProps, 'value' | 'onChange' | 'error' | 'name'> & {
    name: string;
};
declare const TextAreaField: ({ name, ...other }: Props) => react_jsx_runtime.JSX.Element;

declare const index_d$1_CheckboxField: typeof CheckboxField;
declare const index_d$1_InputField: typeof InputField;
declare const index_d$1_MultiSelectField: typeof MultiSelectField;
declare const index_d$1_SelectField: typeof SelectField;
declare const index_d$1_TextAreaField: typeof TextAreaField;
declare namespace index_d$1 {
  export { index_d$1_CheckboxField as CheckboxField, index_d$1_InputField as InputField, index_d$1_MultiSelectField as MultiSelectField, index_d$1_SelectField as SelectField, index_d$1_TextAreaField as TextAreaField };
}

type Params<ListResponse extends unknown[]> = ListParams & {
    usePaginatedListQuery: (params?: ListParams, options?: QueryOptions<InfiniteData<PaginatedListResponse<ListResponse>>>) => InfiniteQueryObserverResult<PaginatedListResponse<ListResponse>>;
    options?: QueryOptions<InfiniteData<PaginatedListResponse<ListResponse>>>;
};
declare const useInfinitiveLoading: <ListResponse extends unknown[]>({ limit, ordering, filters, usePaginatedListQuery, options, }: Params<ListResponse>) => {
    data: null;
    quantity: number;
} | {
    data: ListResponse;
    quantity: number;
};

declare const index_d_useInfinitiveLoading: typeof useInfinitiveLoading;
declare namespace index_d {
  export { index_d_useInfinitiveLoading as useInfinitiveLoading };
}

export { index_d$4 as Components, index_d$1 as Fields, index_d as Hooks, index_d$3 as Providers, types_d as Types, index_d$2 as Utils };
