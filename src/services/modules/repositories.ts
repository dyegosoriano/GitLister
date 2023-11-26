import { clientApi } from '../clientApi'
import { IUser } from '../../types'

const route = 'repos/'

export const show = (full_name: string): Promise<IUser> => clientApi.get(route + full_name)
