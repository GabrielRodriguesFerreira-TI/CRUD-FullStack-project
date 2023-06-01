import { SubmitHandler } from "react-hook-form/dist/types";
import { iClientLoginValues, iClientValuesContext } from "../form/form.styles";

export interface iClientContext {
  loading: boolean;
  open: boolean;
  isMenuOpen: boolean;
  registerSubmit: SubmitHandler<iClientValuesContext>;
  loginSubmit: SubmitHandler<iClientLoginValues>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
