type Color = 'default' | 'green' | 'red' | 'blue';
type Size = 'sm' | 'default' | 'lg';
type Weight = 'normal' | 'medium' | 'semibold';
type Props = {
    children: string;
    size?: Size;
    className?: string;
    tag?: string;
    color?: Color;
    htmlFor?: string;
    weight?: Weight;
};
export declare const Text: ({ tag, color, size, weight, children, className, ...other }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
