import { clientLoginSchema, clientSchema } from "@/schemas/form/form.schema";
import { UseFormRegisterReturn } from "react-hook-form";
import { z } from "zod";

export type iClientValues = z.infer<typeof clientSchema>;

export type iClientLoginValues = z.infer<typeof clientLoginSchema>;

export interface iClientValuesContext {
  fullName: string;
  password: string;
  confirmPassword?: string;
  email: string;
  telephone: string;
}

export interface iInput {
  placeholder: string | undefined;
  type: string;
  register: UseFormRegisterReturn<string>;
  errorInput?: string;
}
