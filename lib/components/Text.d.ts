type Color = 'default' | 'green' | 'red' | 'blue';
type Size = 'sm' | 'default' | 'lg';
type Props = {
    children: string;
    size?: Size;
    className?: string;
    tag?: string;
    color?: Color;
    htmlFor?: string;
};
export declare const Text: ({ tag, color, size, children, className, ...other }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
