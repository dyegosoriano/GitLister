import React, { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const variant = tv({
  base: 'flex justify-center items-center max-w-xs w-full bg-primary hover:bg-secondary text-white text-sm font-medium rounded-md border-none',
  variants: { size: { sm: 'py-2', xs: 'py-4' } },
  defaultVariants: { size: 'xs' }
})

type IProps = ComponentProps<'button'> & VariantProps<typeof variant>

export const Button: React.FC<IProps> = ({ className, size, ...props }) => (
  <button className={variant({ className, size })} {...props} />
)
