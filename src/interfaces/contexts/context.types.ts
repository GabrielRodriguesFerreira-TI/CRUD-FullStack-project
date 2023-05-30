import { SubmitHandler } from "react-hook-form/dist/types";
import { iClientValuesContext } from "../form/form.styles";

export interface iClientContext {
  registerSubmit: SubmitHandler<iClientValuesContext>;
}
