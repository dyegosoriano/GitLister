import React, { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const variant = tv({ base: 'block text-purple font-bold mb-2', defaultVariants: {}, variants: {} })

type IProps = ComponentProps<'label'> & { text: string } & VariantProps<typeof variant>

export const InputLabel: React.FC<IProps> = ({ className, text, ...props }) => (
  <label className={variant({ className })} {...props}>
    {text}
  </label>
)
