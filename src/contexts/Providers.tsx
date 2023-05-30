import { ClientProvider } from "./clientContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ClientProvider>{children}</ClientProvider>;
};
