import React, { ComponentProps, useState } from 'react'
import { FiChevronDown, FiChevronUp, FiMail, FiMapPin, FiStar, FiUsers } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { useQuery } from 'react-query'

import { Button, Header } from '../../components'
import { Input } from '../../components/Input'
import { useUser } from '../../hooks/useUser'
import * as api from '../../services/modules'
import * as utils from '../../utils'

type IProps = ComponentProps<'div'>

export const Home: React.FC<IProps> = () => {
  const { removeUser, saveUser, user } = useUser()

  const { isFetched, isFetching, data, refetch } = useQuery('user', fetchData, { refetchOnWindowFocus: false })
  const [username, setUsername] = useState<string | null>(user?.login || null)
  const [order, setOrder] = useState<'DESC' | 'ASC'>('DESC')

  async function fetchData() {
    if (!username) return

    try {
      const [repos_response, user_response] = await Promise.all([
        api.users.list_repositories(username),
        api.users.show(username)
      ])

      const repos_formatted = repos_response.map(item => ({ ...item, full_name: item.full_name.replace('/', '-') }))
      const repos_sorted = repos_formatted.sort((a, b) => a.stargazers_count - b.stargazers_count)

      saveUser(user_response)

      return { repositories: repos_sorted, user: user_response }
    } catch (error: any) {
      utils.erros.errorHandling(error, 'Usuário não encontrado!')
    }
  }

  const reorderRepositories = () => {
    const new_order = order === 'DESC' ? 'ASC' : 'DESC'

    if (order === 'DESC') data?.repositories?.sort((a, b) => b.stargazers_count - a.stargazers_count)
    if (order === 'ASC') data?.repositories?.sort((a, b) => a.stargazers_count - b.stargazers_count)

    setOrder(new_order)
  }

  return (
    <div className="min-h-screen pb-28 bg-background">
      <Header subtitle="Uma janela para o mundo dos desenvolvedores." title="GitLister" />

      {(!data?.user || !user) && (
        <div className="grid gap-12 md:grid-cols-[1fr_auto] max-w-5xl w-full mx-auto mt-16 p-12 rounded-md bg-white">
          <p className="text-base text-purple">
            Descubra projetos inovadores, acompanhe as tendências de código e conecte-se com a comunidade global de
            criadores. Mergulhe na diversidade de repositórios e veja a magia da colaboração acontecer em tempo real.
          </p>

          <div className="grid gap-8">
            <Input.Container>
              <Input.Label text="Usuário" />
              <Input.Field placeholder="Digite o nome do suário" onChange={event => setUsername(event.target.value)} />
            </Input.Container>

            <Button disabled={isFetching} type="button" onClick={() => refetch()}>
              {isFetching ? 'Buscando...' : 'Buscar'}
            </Button>
          </div>
        </div>
      )}

      {isFetched && data?.user && !!user && (
        <>
          <div className="grid gap-6 max-w-5xl w-full mx-4 md:mx-auto mt-16 p-4 md:p-12 rounded-md bg-white text-purple">
            <div className="grid gap-6 grid-cols-[auto_1fr]">
              <div className="flex justify-center items-center w-32 h-32 md:w-40 md:h-40 bg-background rounded-full">
                <img
                  className="w-28 h-28 md:w-36 md:h-36 rounded-full"
                  alt={`Foto do usuário ${data?.user.name}.`}
                  src={data?.user.avatar_url}
                />
              </div>

              <div className="flex justify-between flex-col md:flex-row">
                <div>
                  <a href={data.user.html_url} target="_blank" rel="noopener noreferrer">
                    <h2 className="font-medium text-3xl mt-4 hover:underline cursor-pointer">{data?.user.name}</h2>
                  </a>

                  <p className="text-md">
                    <strong>Username: </strong>
                    {data?.user.login}
                  </p>
                </div>

                <div className="flex flex-col md:items-end">
                  <span className="flex items-center">
                    <FiUsers className="mr-2" size={18} /> {data?.user.followers} seguidores | {data?.user.following}{' '}
                    seguindo | {data?.user.public_repos} repositórios.
                  </span>

                  {data?.user.email && (
                    <span className="flex items-center">
                      <FiMail className="mr-2" size={18} />
                      <a className="text-md" href={`mailto:${data?.user.email}`}>
                        {data?.user.email}
                      </a>
                    </span>
                  )}

                  {data?.user.location && (
                    <span className="flex items-center">
                      <FiMapPin className="mr-2" size={18} /> {data?.user.location}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Descrição</h3>
              <p>{data?.user.bio || 'Nenhuma descrição foi fornecida.'}</p>
            </div>

            <div className="mx-auto mt-12">
              <Button onClick={removeUser} type="button">
                Efetuar nova busca
              </Button>
            </div>
          </div>

          <div className="max-w-5xl w-full mx-4 md:mx-auto mt-8 p-4 md:p-12 rounded-md bg-white text-purple">
            <div className="flex justify-between items-center mb-12">
              <h2 className="font-medium text-3xl">Lista de repositórios</h2>

              <Button className="w-28 h-12" onClick={reorderRepositories} type="button">
                Ordenar {order === 'ASC' ? <FiChevronUp size={22} /> : <FiChevronDown size={22} />}
              </Button>
            </div>

            <div className="grid gap-2">
              {data?.repositories?.map(repository => (
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

                  <NavLink to={`/repository/${repository.full_name}`}>
                    <Button className="rounded-l-none h-full w-full" type="button">
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
