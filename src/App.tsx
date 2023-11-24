import React from 'react'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export const App: React.FC<IProps> = () => {
  return <h1>Hello world!</h1>
}
