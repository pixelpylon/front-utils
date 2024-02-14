import { ReactNode } from 'react';
type Header = {
    key: string;
    value?: ReactNode;
};
type Row = {
    key: string;
    columns: Record<string, ReactNode>;
};
type Props = {
    headers: Header[];
    rows: Row[];
    showHeader?: boolean;
    className?: string;
    tableClassName?: string;
    headerTrClassName?: string;
    headerThClassName?: string;
    bodyTrClassName?: string;
    bodyTdClassName?: string;
    bodyThClassName?: string;
};
export declare const Table: ({ headers, rows, showHeader, className, tableClassName, headerTrClassName, headerThClassName, bodyTrClassName, bodyTdClassName, bodyThClassName }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
