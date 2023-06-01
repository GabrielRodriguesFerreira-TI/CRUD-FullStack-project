import { z } from "zod";

export const clientSchema = z
  .object({
    fullName: z.string().nonempty("Campo obrigatório").min(6),
    password: z.string().nonempty("Campo obrigatório").min(6).max(200),
    confirmPassword: z.string().nonempty("Campo obrigatório").min(6).max(200),
    email: z.string().email("E-mail inválido").nonempty("Campo obrigatório"),
    telephone: z
      .string()
      .nonempty("Campo obrigatório")
      .refine((value) => /^\(\d{2}\) \d{5}-\d{4}$/.test(value), {
        message:
          "Formato de telefone inválido. Utilize o formato (XX) XXXXX-XXXX",
        path: ["telephone"],
      }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
      });
    }
  });

export const clientLoginSchema = z.object({
  email: z.string().email("E-mail inválido").nonempty("Campo obrigatório"),
  password: z.string().nonempty("Campo obrigatório").min(6).max(200),
});
