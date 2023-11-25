import React, { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const variant = tv({ base: 'max-w-xs w-full h-24', defaultVariants: {}, variants: {} })

type IProps = ComponentProps<'div'> & VariantProps<typeof variant>

export const InputContainer: React.FC<IProps> = ({ className, ...props }) => (
  <div className={variant({ className })} {...props} />
)
