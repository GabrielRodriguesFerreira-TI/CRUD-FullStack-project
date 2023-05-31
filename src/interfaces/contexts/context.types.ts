import { SubmitHandler } from "react-hook-form/dist/types";
import { iClientLoginValues, iClientValuesContext } from "../form/form.styles";

export interface iClientContext {
  loading: boolean;
  registerSubmit: SubmitHandler<iClientValuesContext>;
  loginSubmit: SubmitHandler<iClientLoginValues>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
