import { ReactNode } from 'react';
import { User } from '@exp1/common-utils';
import { AxiosError } from 'axios';
type Props = {
    children: ReactNode;
};
export declare const createUserProvider: (ssoDomain: string, useUserQuery: (params: {
    onSuccess: (user: User) => void;
    onError: (error: AxiosError) => void;
}) => void) => {
    ({ children }: Props): import("react/jsx-runtime").JSX.Element;
    useUser(): User;
};
export {};
