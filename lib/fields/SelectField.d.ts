import { ControlSize, SelectOptions, SelectOption } from '../types';
type Props = {
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
export declare const SelectField: ({ name, ...other }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
