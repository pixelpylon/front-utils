import { ReactNode } from 'react';
import { User } from '@exp1/common-utils';
type Props = {
    children: ReactNode;
};
export declare const createUserProvider: (useUserQuery: (params: {
    onSuccess: (user: User) => void;
}) => void) => {
    ({ children }: Props): import("react/jsx-runtime").JSX.Element;
    useUser(): User;
};
export {};
