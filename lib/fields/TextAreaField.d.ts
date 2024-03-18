import { TextAreaProps } from '../components/TextArea';
type Props = Omit<TextAreaProps, 'value' | 'onChange' | 'error' | 'name'> & {
    name: string;
};
export declare const TextAreaField: ({ name, ...other }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
