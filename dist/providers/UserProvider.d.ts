import React, { ReactNode } from 'react';
import { User } from '../types';
declare type Props = {
    children: ReactNode;
};
export declare const createUserProvider: <Role, Permission>(useUserQuery: (params: {
    onSuccess: (user: User<Role, Permission>) => void;
}) => void) => {
    ({ children }: Props): React.JSX.Element;
    useUser(): User<Role, Permission>;
};
export {};
