import React, { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const variant = tv({
  base: 'appearance-none border rounded-md w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline',
  variants: { size: { sm: 'py-2', xs: 'py-4' } },
  defaultVariants: { size: 'xs' }
})

type IProps = ComponentProps<'input'> & { register?: any } & VariantProps<typeof variant>

export const InputField: React.FC<IProps> = ({ className, register, ...props }) => (
  <input className={variant({ className })} {...register} {...props} />
)
