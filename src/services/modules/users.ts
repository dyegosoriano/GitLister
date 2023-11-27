import { IRepositories } from '../../types/IRepositories'
import { IUser } from '../../types/IUser'
import { clientApi } from '../clientApi'

const route = 'users/'

export const show = (username: string): Promise<IUser> => clientApi.get(route + username)
export const list_repositories = (username: string): Promise<IRepositories> =>
  clientApi.get(route + username + '/repos')
