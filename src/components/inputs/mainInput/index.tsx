import { ImageSourcePropType, TextInputProps, Image, View } from 'react-native'
import React, { useState } from 'react'
import { MaskInputProps } from 'react-native-mask-input'
import { Container, Input, LabelText, Error } from './styles'
import { FieldError } from 'react-hook-form'

export type MainInputProps = TextInputProps &
  MaskInputProps & {
    value?: string
    labelText?: string
    error?: FieldError
    isProfile?: boolean
    iconPath?: ImageSourcePropType
  }

export const MainInput: React.FC<MainInputProps> = ({
  value,
  labelText,
  error,
  isProfile,
  iconPath,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleInputFocus = () => {
    setIsFocused(true)
  }

  const handleInputBlur = () => {
    setIsFocused(false)
  }

  return (
    <>
      <Container hasError={error} isProfile={isProfile}>
        {!isProfile && <LabelText isFocused={isFocused}>{labelText}</LabelText>}

        {isProfile && (
          <>
            <View
              style={{
                position: 'absolute',
                marginLeft: 4
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
        {error != null && !isProfile && <Error>{error.message}</Error>}
      </Container>
      {error != null && isProfile && <Error>{error.message}</Error>}
    </>
  )
}
