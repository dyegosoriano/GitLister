import React, { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const variant = tv({
  base: 'flex justify-center items-center h-12 text-white text-sm font-medium rounded-md border-none',
  variants: {
    status: { activated: 'bg-secondary hover:bg-primary', blocked: 'bg-zinc-400 hover:bg-zinc-500' },
    size: { sm: 'w-64 py-4', xs: 'w-32 py-2' }
  },
  defaultVariants: { status: 'activated', size: 'sm' }
})

type IProps = ComponentProps<'button'> & VariantProps<typeof variant>

export const Button: React.FC<IProps> = ({ className, size, ...props }) => (
  <button className={variant({ className, size })} {...props} />
)
