import { ChangeEvent, ReactNode } from 'react';
type Props = {
    name?: string;
    leftLabel?: ReactNode;
    rightLabel?: ReactNode;
    checked?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
export declare const Switcher: ({ name, leftLabel, rightLabel, checked: initialChecked, onChange }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
