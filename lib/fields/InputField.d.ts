import { ControlSize } from '../types';
type Props = {
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
export declare const InputField: ({ id, label, name, type, disabled, expanded, className, spellCheck, min, max, parse, size }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
