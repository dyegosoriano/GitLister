import { IRepository } from '../../types/IRepository'
import { clientApi } from '../clientApi'

const route = 'repos/'

export const show = (full_name: string): Promise<IRepository> => clientApi.get(route + full_name)
