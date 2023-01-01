import { TextInputProps } from "react-native";
import React, { useState } from "react";
import { Container, Input, LabelText } from "./styles";

export interface MainInputProps extends TextInputProps {
  value?: string;
  labelText: string;
}

export const MainInput: React.FC<MainInputProps> = ({
  value,
  labelText,
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
    <Container>
      <LabelText isFocused={isFocused}>{labelText}</LabelText>
      <Input
        onFocus={handleInputFocus}
        isFocused={isFocused}
        onBlur={handleInputBlur}
        value={value}
        {...rest}
      />
    </Container>
  );
};
