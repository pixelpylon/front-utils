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
    size?: ControlSize;
};
export declare const TextAreaField: ({ id, label, name, type, disabled, expanded, className, spellCheck, size }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
