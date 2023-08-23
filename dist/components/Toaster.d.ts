import React from 'react';
import { AlertType } from '../types';
export declare type ToasterEvent = {
    type: AlertType;
    message: string;
};
export declare type KeyedToasterEvent = ToasterEvent & {
    key: string;
};
declare type Props = {
    events: KeyedToasterEvent[];
    className?: string;
};
export declare const Toaster: ({ events, className }: Props) => React.JSX.Element;
export {};
