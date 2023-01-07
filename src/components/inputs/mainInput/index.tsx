import {
  ImageSourcePropType,
  TextInputProps,
  Image,
  View,
  Text,
} from "react-native";
import React, { useState } from "react";
import { Container, Input, LabelText } from "./styles";
import { FieldError } from "react-hook-form";
import { Error } from "./styles";

export interface MainInputProps extends TextInputProps {
  value?: string;
  labelText?: string;
  error?: FieldError;
  isProfile?: boolean;
  iconPath?: ImageSourcePropType;
}

export const MainInput: React.FC<MainInputProps> = ({
  value,
  labelText,
  error,
  isProfile,
  iconPath,
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
    <Container hasError={error} isProfile={isProfile}>
      {!isProfile && <LabelText isFocused={isFocused}>{labelText}</LabelText>}

      {isProfile && (
        <>
          <View
            style={{
              position: "absolute",
              marginLeft: 4,
            }}
          >
            <Image source={iconPath} />
          </View>
        </>
      )}
      <Input
        onFocus={handleInputFocus}
        isFocused={isFocused}
        onBlur={handleInputBlur}
        value={value}
        hasError={error}
        isProfile={isProfile}
        placeholder="teste"
        {...rest}
      />
      {error && <Error>{error.message}</Error>}
    </Container>
  );
};
