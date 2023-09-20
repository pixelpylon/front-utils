import { ReactNode } from 'react';
import { AlertType } from '../types';
type Props = {
    type: AlertType;
    children: ReactNode;
    className?: string;
};
export declare const Alert: ({ type, children, className }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
