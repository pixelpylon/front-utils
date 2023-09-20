import { AlertType } from '../types';
export type ToasterEvent = {
    type: AlertType;
    message: string;
};
export type KeyedToasterEvent = ToasterEvent & {
    key: string;
};
type Props = {
    events: KeyedToasterEvent[];
    className?: string;
};
export declare const Toaster: ({ events, className }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
