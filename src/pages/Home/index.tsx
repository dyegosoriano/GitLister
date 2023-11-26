import React, { ComponentProps, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMail, FiMapPin, FiUsers } from 'react-icons/fi'

import { InputContainer } from '../../components/Input/InputContainer'
import { InputLabel } from '../../components/Input/InputLabel'
import { InputError } from '../../components/Input/InputError'
import { InputField } from '../../components/Input/InputField'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { IUser } from '../../types/IUser'

type IProps = ComponentProps<'div'>

export const Home: React.FC<IProps> = () => {
  const [user, setUser] = useState<IUser>({})

  return (
    <div className="h-screen bg-background">
      <Header subtitle="Uma janela para o mundo dos desenvolvedores." title="GitLister" />

      {!user && (
        <div className="grid gap-12 grid-cols-[1fr_auto] max-w-5xl w-full mx-auto mt-16 p-12 rounded-md bg-white">
          <p className="text-base text-purple">
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
      )}

      {user && (
        <div className="grid gap-6 max-w-5xl w-full mx-auto mt-16 p-12 rounded-md bg-white text-purple">
          <div className="grid gap-6 grid-cols-[auto_1fr]">
            <div className="flex justify-center items-center w-40 h-40 bg-background rounded-full">
              <img
                className="w-36 h-36 rounded-full"
                src="https://avatars.githubusercontent.com/u/4140145?v=4"
                alt="Foto do usuário Dyego Soriano."
              />
            </div>

            <div className="flex justify-between">
              <div>
                <h2 className="font-medium text-3xl mt-4">Dyego Soriano</h2>

                <p className="text-md">dyegosoriano</p>
              </div>

              <div className="flex flex-col items-end">
                <span className="flex items-center">
                  <FiUsers className="mr-2" size={18} /> 12 seguidores | 19 seguindo | 38 repositórios.
                </span>

                <span className="flex items-center">
                  <FiMail className="mr-2" size={18} />
                  <a className="text-md" href="mailto:dyegosoriano@email.com">
                    dyegosoriano@email.com
                  </a>
                </span>

                <span className="flex items-center">
                  <FiMapPin className="mr-2" size={18} /> Brasília
                </span>
              </div>
            </div>
          </div>

          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe praesentium mollitia obcaecati ab animi,
            error tempore sint maxime odit beatae, voluptatem cum ut itaque repellat impedit, voluptate amet dolorem
            ipsam?
          </p>
        </div>
      )}
    </div>
  )
}
