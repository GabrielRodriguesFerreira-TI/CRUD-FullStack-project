import "../../Sass/global/responsiviness.scss";
import "../../Sass/input/input.styles.scss";
import { iInput } from "@/interfaces/form/form.styles";
import ReactInputMask from "react-input-mask";

export const InputComponent = ({
  placeholder,
  type,
  errorInput,
  register,
}: iInput) => {
  return (
    <>
      {placeholder === "Telefone" ? (
        <ReactInputMask
          mask="(99) 99999-9999"
          type={type}
          placeholder={placeholder}
          className={`font-size-text text-black bg-gray-100 placeholder-gray-500 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors duration-500 ease-in-out placeholderInput ${
            errorInput && "errorInput"
          }`}
          {...register}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={`font-size-text text-black bg-gray-100 placeholder-gray-500 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors duration-500 ease-in-out placeholderInput ${
            errorInput && "errorInput"
          }`}
          {...register}
        />
      )}
    </>
  );
};
