import { FormikConfig, FormikValues } from "formik";
import { ButtonP } from "../button/button.options";
import { InputP } from "../input/input.options";
export type FormP<Values extends FormikValues = FormikValues> = FormikConfig<Values> & {
    inputs: (Omit<InputP, 'error' | 'value' | 'onBlur' | 'name'> & {
        name: keyof Values;
    })[];
    submitProps?: Omit<ButtonP, 'onPress'>;
};
