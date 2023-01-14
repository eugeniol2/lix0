import * as yup from 'yup'

export const profileSchema = yup.object({
  name: yup.string(),
  email: yup.string().email('E-mail inválido'),
  birthDate: yup
    .date()

    .min(new Date(1900, 0, 1), 'Você deve ter nascido após 1900')
    .max(
      new Date().toLocaleDateString(),
      'A data correspondente está no futuro'
    ),

  location: yup.string()
})
