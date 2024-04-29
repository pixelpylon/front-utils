type LinkProps = {
    to: string;
};
type ButtonProps = {
    onClick: () => void;
};
type Props = (LinkProps | ButtonProps) & {
    children: string;
    className?: string;
};
export declare const StandardLink: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
