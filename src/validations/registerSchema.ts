import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup
    .string()
    .min(4, "O nome deve possuir mais do que quatro letras.")
    .required("Por favor, preechar o seu nome completo."),
  email: yup.string().email("E-mail inválido").required("Informe o e-mail"),
  password: yup.string().required("Este campo não pode ser vazio"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais."),
});
