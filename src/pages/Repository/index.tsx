import React, { ComponentProps } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { FiEye, FiStar } from 'react-icons/fi'
import { useQuery } from 'react-query'

import { Button } from '../../components/Button'
import * as api from '../../services/modules'
import { Header } from '../../components'

type IProps = ComponentProps<'div'>

export const Repository: React.FC<IProps> = () => {
  const { isFetched, data } = useQuery('repository', fetchData, { cacheTime: 60 })
  const { full_name } = useParams()

  async function fetchData() {
    if (!full_name) return

    try {
      const repository = await api.repositories.show(full_name.replace('-', '/'))
      return { repository }
    } catch (error) {}
  }

  return (
    <div className="min-h-screen pb-28 bg-background">
      <Header subtitle="Uma janela para o mundo dos desenvolvedores." title="GitLister" />

      {isFetched && !!data?.repository && (
        <div className="grid max-w-5xl w-full mx-4 md:mx-auto mt-16 p-4 md:p-12 rounded-md bg-white text-purple">
          <div className="flex justify-between mb-2">
            <a href={data.repository.html_url} target="_blank" rel="noopener noreferrer">
              <h2 className="font-medium text-3xl mt-4 hover:underline cursor-pointer">{data.repository.name}</h2>
            </a>

            <div className="flex">
              <span className="flex items-center ml-4">
                <FiStar className="mr-1 fill-amber-500" size={18} /> {data.repository.stargazers_count}
              </span>

              <span className="flex items-center ml-4">
                <FiEye className="mr-1 fill-amber-500" size={18} /> {data.repository.watchers_count}
              </span>
            </div>
          </div>

          {data.repository.topics.length > 0 && (
            <p>
              <strong>Tópicos: </strong>
              {data.repository.topics.map((item, index) => (index === 0 ? item : `, ${item}`))}.
            </p>
          )}

          <p className="text-base">
            <strong>Linguagem: </strong>
            {data.repository.language}
          </p>

          <div className="my-12">
            <h3 className="text-xl font-bold mb-2">Descrição</h3>
            <p>{data.repository.description || 'Nenhuma descrição foi fornecida.'}</p>
          </div>

          <div className="mx-auto">
            <NavLink to="/">
              <Button className="" type="button">
                Voltar
              </Button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  )
}
