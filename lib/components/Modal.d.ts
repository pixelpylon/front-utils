import { ReactNode } from 'react';
type Props = {
    className?: string;
    modalClassName?: string;
    bodyClassName?: string;
    onClose?: () => void;
    title?: string;
    subtitle?: string;
    children: ReactNode;
    fullscreen?: boolean;
};
export declare const Modal: ({ className, modalClassName, bodyClassName, onClose, title, subtitle, children, fullscreen, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
