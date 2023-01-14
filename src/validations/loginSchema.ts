import * as yup from 'yup'

export const loginSchema = yup.object({
  email: yup.string().email('E-mail inválido').required('Informe o e-mail'),
  password: yup.string().required('Este campo não pode ser vazio')
})
