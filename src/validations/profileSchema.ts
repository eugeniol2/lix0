import * as yup from "yup";

export const profileSchema = yup.object({
  name: yup.string(),
  email: yup.string().email("E-mail inválido"),
  birthDate: yup.date(),
  location: yup.string(),
});
