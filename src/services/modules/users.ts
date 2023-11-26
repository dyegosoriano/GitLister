import { IRepositories, IUser } from '../../types'
import { clientApi } from '../clientApi'

const route = 'users/'

export const show = (username: string): Promise<IUser> => clientApi.get(route + username)
export const list_repositories = (username: string): Promise<IRepositories> =>
  clientApi.get(route + username + '/repos')
