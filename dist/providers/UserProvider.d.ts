import React, { ReactNode } from 'react';
import { User } from '@exp1/common-utils';
declare type Props = {
    children: ReactNode;
};
export declare const createUserProvider: (useUserQuery: (params: {
    onSuccess: (user: User) => void;
}) => void) => {
    ({ children }: Props): React.JSX.Element;
    useUser(): User;
};
export {};
