import React, { ReactNode } from 'react';
declare type Header = {
    key: string;
    value?: ReactNode;
};
declare type Row = {
    key: string;
    columns: Record<string, ReactNode>;
};
declare type Props = {
    headers: Header[];
    rows: Row[];
};
export declare const Table: ({ headers, rows }: Props) => React.JSX.Element;
export {};
