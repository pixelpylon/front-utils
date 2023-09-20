import { ReactNode } from 'react';
type Props = {
    children: ReactNode;
};
export declare const WaitingProvider: {
    ({ children }: Props): import("react/jsx-runtime").JSX.Element;
    useIsWaiting(): boolean;
    useWaitingMutation(): {
        addWaiter: (name: string) => void;
        removeWaiter: (name: string) => void;
    };
};
export {};
