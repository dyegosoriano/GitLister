import React, { ComponentProps } from 'react'
import { FiEye, FiStar } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

import { mockRepository } from '../../utils/mocks'
import { Button } from '../../components/Button'
import { Header } from '../../components'

type IProps = ComponentProps<'div'>

export const Repository: React.FC<IProps> = () => {
  return (
    <div className="min-h-screen pb-28 bg-background">
      <Header subtitle="Uma janela para o mundo dos desenvolvedores." title="GitLister" />

      <div className="grid max-w-5xl w-full mx-4 md:mx-auto mt-16 p-4 md:p-12 rounded-md bg-white text-purple">
        <div className="flex justify-between mb-2">
          <a href={mockRepository.html_url} target="_blank" rel="noopener noreferrer">
            <h2 className="font-medium text-3xl mt-4 hover:underline cursor-pointer">{mockRepository.name}</h2>
          </a>

          <div className="flex">
            <span className="flex items-center ml-4">
              <FiStar className="mr-1 fill-amber-500" size={18} /> {mockRepository.stargazers_count}
            </span>

            <span className="flex items-center ml-4">
              <FiEye className="mr-1 fill-amber-500" size={18} /> {mockRepository.watchers_count}
            </span>
          </div>
        </div>

        <p>Tópicos: {mockRepository.topics.map((item, index) => (index === 0 ? item : `, ${item}`))}.</p>
        <p className="text-base">{mockRepository.language}</p>

        <p className="my-12">
          {mockRepository.description ? mockRepository.description : 'Nenhuma descrição foi fornecida.'}
        </p>

        <NavLink to="/">
          <Button className="mx-auto" type="button">
            Voltar
          </Button>
        </NavLink>
      </div>
    </div>
  )
}
