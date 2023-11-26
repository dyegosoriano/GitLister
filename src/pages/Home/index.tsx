import React, { ComponentProps } from 'react'
import { NavLink } from 'react-router-dom'

import { InputContainer } from '../../components/Input/InputContainer'
import { InputLabel } from '../../components/Input/InputLabel'
import { InputError } from '../../components/Input/InputError'
import { InputField } from '../../components/Input/InputField'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

type IProps = ComponentProps<'div'>

export const Home: React.FC<IProps> = () => {
  return (
    <div className="h-screen bg-background">
      <Header subtitle="Uma janela para o mundo dos desenvolvedores." title="GitLister" />

      <div className="grid gap-12 grid-cols-[1fr_auto] max-w-5xl w-full mx-auto mt-16 p-12 rounded-md bg-white">
        <p className="text-purple">
          Descubra projetos inovadores, acompanhe as tendências de código e conecte-se com a comunidade global de
          criadores. Mergulhe na diversidade de repositórios e veja a magia da colaboração acontecer em tempo real.
        </p>

        <div className="grid gap-8">
          <InputContainer>
            <InputLabel text="Usuário" />
            <InputField placeholder="Digite o nome do suário" />
            <InputError text="mensagem de erro" />
          </InputContainer>

          <NavLink to="/repository">
            <Button type="button">Buscar</Button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
