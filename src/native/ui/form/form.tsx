import React from 'react'
import { FormP } from './form.options'
import { Formik, FormikValues } from 'formik'
import classNames from 'classnames'
import _ from 'lodash'
import { Input } from '../input/input'
import { Button } from '../button/button'

export const Form = function Form<Values extends FormikValues = FormikValues>({ children, inputs, initialValues, submitProps, ...p }: FormP<Values>) {
  return (
    <Formik<Values>
      {...p}
      initialValues={initialValues}
    >
      {(settings) => (
        <>
          {inputs?.map(({ name, onChangeText, ...inputProps }) => (
            <Input
              {...inputProps}
              key={name.toString()}
              onChangeText={(val) => {
                settings.handleChange(name)(val)
                onChangeText?.(val)
              }}
              error={settings.errors[name] as any}
              onBlur={settings.handleBlur(name) as any}
              value={settings.values[name]}
              className={classNames(inputProps.className)}
              containerClassName={classNames('mt-2', inputProps.containerClassName)}
            />
          ))}


          {!!submitProps && (
            <Button
              {...submitProps}
              onPress={() => settings.handleSubmit()}
              className={classNames(submitProps.className)}
              disabled={!Boolean(_.values(settings.touched).length) || Boolean(_.values(settings.errors).length)}
              forceShowPreloader={settings.isSubmitting}
            />
          )}

          {children && typeof children === 'function' ? children(settings) : children}
        </>
      )}
    </Formik>
  )
}