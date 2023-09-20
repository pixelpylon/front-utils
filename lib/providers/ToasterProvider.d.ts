import { ToasterEvent } from '../components/Toaster';
import { ReactNode } from 'react';
type Props = {
    children: ReactNode;
};
export declare const ToasterProvider: {
    ({ children }: Props): import("react/jsx-runtime").JSX.Element;
    useToasterMessageAdder(): (event: ToasterEvent) => void;
};
export {};
