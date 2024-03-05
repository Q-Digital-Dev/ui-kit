import { ButtonP } from "../button.options";
export default function ({ showPreloader, isBlocked, colorPreloader }: Pick<ButtonP, 'showPreloader' | 'colorPreloader'> & {
    isBlocked: boolean;
}): import("react/jsx-runtime").JSX.Element | null;
