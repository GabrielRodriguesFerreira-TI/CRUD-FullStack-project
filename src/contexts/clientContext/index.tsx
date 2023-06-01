"use client";
import { toast } from "react-toastify";
import { iClientContext } from "@/interfaces/contexts/context.types";
import {
  iClientLoginValues,
  iClientValuesContext,
} from "@/interfaces/form/form.styles";
import { createContext, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import { iLogoutProps } from "@/interfaces/customers/customers.types";

export const ClientContext = createContext({} as iClientContext);

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const APIurl = "https://contact-connect-api-prod.herokuapp.com";

  const router = useRouter();

  const loginClient: SubmitHandler<iClientLoginValues> = async (data) => {
    try {
      setLoading(true);
      const response = await fetch(`${APIurl}/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      const cookies = new Cookies();
      cookies.set("accessToken", responseData.accessToken, { maxAge: 86400 });
      cookies.set("refreshToken", responseData.refreshToken, {
        maxAge: 604800,
      });
      if (response.ok) {
        router.replace("/dashboard");
      } else {
        throw new Error(`${response.body}`);
      }
    } catch (error) {
      console.error(error);
      toast.error(`${error}`);
    } finally {
      setLoading(false);
    }
  };

  const loginSubmit: SubmitHandler<iClientLoginValues> = async (data) => {
    await loginClient(data);
  };

  const createClient: SubmitHandler<iClientValuesContext> = async (data) => {
    try {
      setLoading(true);
      const respose = await fetch(`${APIurl}/customers`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (respose.ok) {
        router.replace("/login");
      } else {
        throw new Error(`${respose.body}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const registerSubmit: SubmitHandler<iClientValuesContext> = async (data) => {
    delete data.confirmPassword;
    await createClient(data);
  };

  return (
    <ClientContext.Provider
      value={{
        registerSubmit,
        loading,
        setLoading,
        loginSubmit,
        open,
        setOpen,
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
