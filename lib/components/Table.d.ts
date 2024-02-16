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
    headTrClassName?: string;
    headThClassName?: string;
    bodyTrClassName?: string;
    bodyTdClassName?: string;
    bodyThClassName?: string;
    getBodyTr?: (row: Row, rows: Row[], headers: Header[]) => ReactNode;
};
export declare const Table: ({ headers, rows, showHeader, className, tableClassName, headTrClassName, headThClassName, bodyTrClassName, bodyTdClassName, bodyThClassName, getBodyTr, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
