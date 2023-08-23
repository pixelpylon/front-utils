import React, { ReactNode } from 'react';
declare type Props = {
    children: ReactNode;
};
export declare const WaitingProvider: {
    ({ children }: Props): React.JSX.Element;
    useIsWaiting(): boolean;
    useWaitingMutation(): {
        addWaiter: (name: string) => void;
        removeWaiter: (name: string) => void;
    };
};
export {};
