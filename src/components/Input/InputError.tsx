import React, { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const variant = tv({ base: 'text-warning', defaultVariants: {}, variants: {} })

type IProps = ComponentProps<'span'> & { text?: string } & VariantProps<typeof variant>

export const InputError: React.FC<IProps> = ({ className, text, ...props }) => (
  <span className={variant({ className })} {...props}>
    {text}
  </span>
)
