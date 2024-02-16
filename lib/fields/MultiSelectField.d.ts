import { ControlSize, SelectOptions } from '../types';
type Props = {
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
};
export declare const MultiSelectField: ({ id, initialValue, label, name, options, disabled, expanded, className, visibleNumber, size, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
