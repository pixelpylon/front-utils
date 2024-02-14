import { SelectOptions } from '../types';
type Props = {
    id?: string;
    label?: string;
    name: string;
    options: SelectOptions;
    disabled?: boolean;
    expanded?: boolean;
    className?: string;
};
export declare const SelectField: ({ id, label, name, options, disabled, expanded, className }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
