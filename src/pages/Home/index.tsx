import React, { ComponentProps, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMail, FiMapPin, FiStar, FiUsers } from 'react-icons/fi'

import { mockRepositories } from '../../utils/mocks'
import { IRepositories, IUser } from '../../types'
import { Button, Header } from '../../components'
import { Input } from '../../components/Input'

type IProps = ComponentProps<'div'>

export const Home: React.FC<IProps> = () => {
  const [repositories, setRepositories] = useState<IRepositories>(mockRepositories)
  const [user, setUser] = useState<IUser>({})

  return (
    <div className="h-full pb-28 bg-background">
      <Header subtitle="Uma janela para o mundo dos desenvolvedores." title="GitLister" />

      {!user && (
        <div className="grid gap-12 md:grid-cols-[1fr_auto] max-w-5xl w-full mx-auto mt-16 p-12 rounded-md bg-white">
          <p className="text-base text-purple">
            Descubra projetos inovadores, acompanhe as tendências de código e conecte-se com a comunidade global de
            criadores. Mergulhe na diversidade de repositórios e veja a magia da colaboração acontecer em tempo real.
          </p>

          <div className="grid gap-8">
            <Input.Container>
              <Input.Label text="Usuário" />
              <Input.Field placeholder="Digite o nome do suário" />
              <Input.Error text="mensagem de erro" />
            </Input.Container>

            <Button className="h-12" type="button">
              Buscar
            </Button>
          </div>
        </div>
      )}

      {user && (
        <>
          <div className="grid gap-6 max-w-5xl w-full mx-4 md:mx-auto mt-16 p-4 md:p-12 rounded-md bg-white text-purple">
            <div className="grid gap-6 grid-cols-[auto_1fr]">
              <div className="flex justify-center items-center w-32 h-32 md:w-40 md:h-40 bg-background rounded-full">
                <img
                  className="w-28 h-28 md:w-36 md:h-36 rounded-full"
                  src="https://avatars.githubusercontent.com/u/4140145?v=4"
                  alt="Foto do usuário Dyego Soriano."
                />
              </div>

              <div className="flex justify-between flex-col md:flex-row">
                <div>
                  <h2 className="font-medium text-3xl mt-4">Dyego Soriano</h2>
                  <p className="text-md">dyegosoriano</p>
                </div>

                <div className="flex flex-col md:items-end">
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

          <div className="max-w-5xl w-full mx-4 md:mx-auto mt-8 p-4 md:p-12 rounded-md bg-white text-purple">
            <h2 className="font-medium text-3xl mb-12">Lista de repositórios</h2>

            <div className="grid gap-2">
              {repositories.map(repository => (
                <div key={repository.id} className="grid grid-cols-[1fr_6rem] border rounded-md">
                  <div className="p-2">
                    <h4 className="font-semibold text-xl">{repository.name}</h4>

                    <div className="flex">
                      <p className="text-base">{repository.language}</p>

                      <span className="flex items-center ml-4">
                        <FiStar className="mr-1 fill-amber-500" size={18} /> {repository.stargazers_count}
                      </span>
                    </div>
                  </div>

                  <NavLink to="/repository">
                    <Button className="rounded-l-none h-full" type="button">
                      Visualizar
                    </Button>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
