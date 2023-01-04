import { Controller, Control, FieldError } from "react-hook-form";
import { MainInput, MainInputProps } from "../mainInput";
import { Error } from "./styles";

type ControlledInputProps = MainInputProps & {
  control: Control<any>;
  name: string;
  error?: FieldError;
};

export const ControlledInput: React.FC<ControlledInputProps> = ({
  control,
  name,
  error,
  ...rest
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <MainInput
            onChangeText={onChange}
            value={value}
            error={error}
            {...rest}
          />
        )}
      ></Controller>
    </>
  );
};
