import { AxiosError } from 'axios'

import * as utils from './index'

export const errorHandling = (error: AxiosError, custom_message: string): string => {
  switch (error.status) {
    case 404:
      utils.toastify(custom_message, 'error')
      return custom_message

    default:
      utils.toastify('Ocorreu um erro na comunicação com a api!', 'error')
      return 'Ocorreu um erro de comunicação com a api!'
  }
}
