import * as yup from "yup";
import { validateData } from "./regex/regex";

export const profileSchema = yup.object({
  name: yup.string(),
  email: yup.string().email("E-mail inválido"),
  birthDate: yup
    .date()
    .max(
      new Date().toLocaleDateString(),
      "Não é possível incluir uma data futura"
    ),

  location: yup.string(),
});
