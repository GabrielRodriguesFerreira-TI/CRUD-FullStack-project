import { iFormValues } from "@/interfaces/form/form.styles";
import { z } from "zod";

export const formSchema = z.object({
  fullName: z.string().nonempty("Campo obrigatório").min(6),
  password: z.string().nonempty("Campo obrigatório").min(6).max(200),
  confirmPassword: z
    .string()
    .nonempty("Campo obrigatório")
    .refine((value) => value === (this as any).parent.password, {
      message: "As senhas não correspondem",
      path: ["confirmPassword"],
    }),
  email: z.string().email("E-mail inválido").nonempty("Campo obrigatório"),
  telephone: z
    .string()
    .nonempty("Campo obrigatório")
    .refine((value) => /^\(\d{2}\) \d{5}-\d{4}$/.test(value), {
      message:
        "Formato de telefone inválido. Utilize o formato (XX) XXXXX-XXXX",
      path: ["telephone"],
    }),
});
