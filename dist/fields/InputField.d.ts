import React from 'react';
declare type Props = {
    id?: string;
    label?: string;
    name: string;
    type?: string;
    disabled?: boolean;
    expanded?: boolean;
    spellCheck?: boolean;
    className?: string;
};
export declare const InputField: ({ id, label, name, type, disabled, expanded, className, spellCheck }: Props) => React.JSX.Element;
export {};
