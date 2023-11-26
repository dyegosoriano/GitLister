import React, { ComponentProps } from 'react'

type IProps = ComponentProps<'div'> & { title?: string; subtitle?: string }

export const Header: React.FC<IProps> = ({ title, subtitle, ...props }) => {
  return (
    <div className="w-full h-60 px-6 py-16 bg-primary text-white" {...props}>
      <div className="max-w-5xl w-full mx-auto">
        {!!title && <h1 className="font-bold text-5xl mb-2">{title}</h1>}
        {!!subtitle && <p className="text-md">{subtitle}</p>}
      </div>
    </div>
  )
}
