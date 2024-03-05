import { FormP } from './form.options';
import { FormikValues } from 'formik';
export declare const Form: <Values extends FormikValues = FormikValues>({ children, inputs, initialValues, submitProps, ...p }: FormP<Values>) => import("react/jsx-runtime").JSX.Element;
