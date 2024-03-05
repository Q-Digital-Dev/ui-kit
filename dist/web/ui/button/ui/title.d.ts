/// <reference types="react" />
import { ButtonP } from "../button.options";
export default function ({ title, titleClassName, ...p }: Pick<ButtonP, 'title' | 'titleClassName'> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
