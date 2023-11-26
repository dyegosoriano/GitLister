import { clientApi } from '../clientApi'
import { IUser } from '../../types'

const route = 'users/'

export const list_repositories = (username: string): Promise<IUser> => clientApi.get(route + username + '/repos')
export const show = (username: string): Promise<IUser> => clientApi.get(route + username)
