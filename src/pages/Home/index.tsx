import React, { ComponentProps } from 'react'
import { NavLink } from 'react-router-dom'

type IProps = ComponentProps<'div'>

export const Home: React.FC<IProps> = () => {
  return (
    <div>
      <h1>Home</h1>

      <NavLink to="/repository">
        <button type="button">repositório</button>
      </NavLink>
    </div>
  )
}
