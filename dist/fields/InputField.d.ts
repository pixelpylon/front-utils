import React from 'react';
declare type Props = {
    label?: string;
    name: string;
    type?: string;
    disabled?: boolean;
    expanded?: boolean;
    spellCheck?: boolean;
    className?: string;
};
export declare const InputField: ({ label, name, type, disabled, expanded, className, spellCheck }: Props) => React.JSX.Element;
export {};
