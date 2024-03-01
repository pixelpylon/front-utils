import { ReactNode } from 'react';
type Props = {
    className?: string;
    modalClassName?: string;
    bodyClassName?: string;
    onClose?: () => void;
    title?: string;
    subtitle?: string;
    children: ReactNode;
};
export declare const Modal: ({ className, modalClassName, bodyClassName, onClose, title, subtitle, children, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
