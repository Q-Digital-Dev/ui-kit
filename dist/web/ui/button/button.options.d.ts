/// <reference types="react" />
export type ButtonP = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    onClick?(e: React.MouseEvent<HTMLDivElement, MouseEvent>): Promise<void> | void;
    throttleTime?: number;
    showPreloader?: boolean;
    colorPreloader?: string;
    title?: string;
    titleProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    titleClassName?: string;
    disabled?: boolean;
};
