"use client";
import { iClientContext } from "@/interfaces/contexts/context.types";
import { iClientValuesContext } from "@/interfaces/form/form.styles";
import { createContext, useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";

export const ClientContext = createContext({} as iClientContext);

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const APIurl = "https://contact-connect-api-prod.herokuapp.com";

  const createClient: SubmitHandler<iClientValuesContext> = async (data) => {
    try {
      await fetch(`${APIurl}/customers`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
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
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
