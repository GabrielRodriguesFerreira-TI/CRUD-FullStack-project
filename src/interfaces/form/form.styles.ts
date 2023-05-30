import { formSchema } from "@/schemas/form/form.schema";
import { UseFormRegisterReturn } from "react-hook-form";
import { z } from "zod";

export type iFormValues = z.infer<typeof formSchema>;

export interface iInput {
  placeholder: string | undefined;
  type: string;
  register: UseFormRegisterReturn<string>;
  errorInput?: string;
}
