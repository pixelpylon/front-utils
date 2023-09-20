type Size = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Props = {
    children: string;
    size: Size;
    className?: string;
};
export declare const Header: {
    ({ size, children, className }: Props): import("react/jsx-runtime").JSX.Element;
    H1({ children, className }: HeaderProps): import("react/jsx-runtime").JSX.Element;
    H2({ children, className }: HeaderProps): import("react/jsx-runtime").JSX.Element;
    H3({ children, className }: HeaderProps): import("react/jsx-runtime").JSX.Element;
    H4({ children, className }: HeaderProps): import("react/jsx-runtime").JSX.Element;
    H5({ children, className }: HeaderProps): import("react/jsx-runtime").JSX.Element;
    H6({ children, className }: HeaderProps): import("react/jsx-runtime").JSX.Element;
};
type HeaderProps = {
    children: string;
    className?: string;
};
export {};
