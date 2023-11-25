import React, { ComponentProps } from 'react'
import { NavLink } from 'react-router-dom'

type IProps = ComponentProps<'div'>

export const Repository: React.FC<IProps> = () => {
  return (
    <div>
      <h1>Repository</h1>

      <NavLink to="/">
        <button type="button">voltar</button>
      </NavLink>
    </div>
  )
}
