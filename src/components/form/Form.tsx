"use client";
import "../../Sass/global/responsiviness.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { iFormValues } from "@/interfaces/form/form.styles";
import { formSchema } from "@/schemas/form/form.schema";
import { InputComponent } from "../input/Input";
import Link from "next/link";

export const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormValues>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
  });

  return (
    <form
      noValidate
      className="flex flex-col  gap-4 w-full max-w-[360px] bg-[#ffffff76] rounded-md p-4"
    >
      <h1 className="text-black font-bold">Registro</h1>
      <InputComponent
        errorInput={errors.fullName?.message}
        register={register("fullName")}
        placeholder="Nome Completo"
        type="text"
      />
      {errors.fullName?.message && (
        <p className="text-sm text-red-600">{errors.fullName.message}</p>
      )}
      <InputComponent
        errorInput={errors.password?.message}
        register={register("password")}
        placeholder="Senha"
        type="password"
      />
      {errors.password?.message && (
        <p className="text-sm text-red-600">{errors.password.message}</p>
      )}
      <InputComponent
        errorInput={errors.confirmPassword?.message}
        register={register("confirmPassword")}
        placeholder="Confirmar senha"
        type="password"
      />
      {errors.confirmPassword?.message && (
        <p className="text-sm text-red-600">{errors.confirmPassword.message}</p>
      )}
      <InputComponent
        errorInput={errors.email?.message}
        register={register("email")}
        placeholder="Email"
        type="email"
      />
      {errors.email?.message && (
        <p className="text-sm text-red-600">{errors.email.message}</p>
      )}
      <InputComponent
        errorInput={errors.telephone?.message}
        register={register("telephone")}
        placeholder="Telefone"
        type="text"
      />
      {errors.telephone?.message && (
        <p className="text-sm text-red-600">{errors.telephone.message}</p>
      )}
      <div className="flex flex-row gap-2">
        <span className="text-sm text-black">Já possui uma conta?</span>
        <Link href="/login" className="text-sm text-[#1A4CC7]">
          Logar
        </Link>
      </div>
      <div className="flex w-full justify-center">
        <button
          type="submit"
          className="flex font-size-text justify-center border-2 border-[#1A4CC7] rounded-md w-full font-bold text-[#1A4CC7] md:w-[70%] hover:bg-[#1A4CC7] hover:text-white hover:shadow-blue transition-all duration-300 ease-in-out"
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
};
