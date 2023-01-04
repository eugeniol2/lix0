import { TextInputProps } from "react-native";
import React, { useState } from "react";
import { Container, Input, LabelText } from "./styles";
import { FieldError } from "react-hook-form";
import { Error } from "./styles";

export interface MainInputProps extends TextInputProps {
  value?: string;
  labelText: string;
  error?: FieldError;
}

export const MainInput: React.FC<MainInputProps> = ({
  value,
  labelText,
  error,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <Container hasError={error}>
      <LabelText isFocused={isFocused}>{labelText}</LabelText>
      <Input
        onFocus={handleInputFocus}
        isFocused={isFocused}
        onBlur={handleInputBlur}
        value={value}
        hasError={error}
        {...rest}
      />
      {error && <Error>{error.message}</Error>}
    </Container>
  );
};
