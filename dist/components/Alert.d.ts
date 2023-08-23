import React, { ReactNode } from 'react';
import { AlertType } from '../types';
declare type Props = {
    type: AlertType;
    children: ReactNode;
    className?: string;
};
export declare const Alert: ({ type, children, className }: Props) => React.JSX.Element;
export {};
