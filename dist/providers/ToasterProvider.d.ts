import { ToasterEvent } from '../components/Toaster';
import React, { ReactNode } from 'react';
declare type Props = {
    children: ReactNode;
};
export declare const ToasterProvider: {
    ({ children }: Props): React.JSX.Element;
    useToasterMessageAdder(): (event: ToasterEvent) => void;
};
export {};
