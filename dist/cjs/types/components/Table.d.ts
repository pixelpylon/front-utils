import React, { ReactNode } from 'react';
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
};
export declare const Table: ({ headers, rows }: Props) => React.JSX.Element;
export {};
