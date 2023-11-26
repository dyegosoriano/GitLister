import { toast, ToastOptions, TypeOptions } from 'react-toastify'

const toastOptions = <ToastOptions>{
  style: { fontSize: '1.2rem' },
  hideProgressBar: true,
  position: 'top-right',
  theme: 'dark'
}

export const toastify = (text: string, type: TypeOptions) => {
  return toast(text, { type, ...toastOptions })
}
