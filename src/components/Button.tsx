import React from 'react'

import styled from '@emotion/native'
import { TouchableOpacity } from 'react-native'

import { DefaultText } from 'components/styled/Text'

const Wrapper = styled(TouchableOpacity)<{ bgColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 100%;
  height: 50px;
  padding: 5px 10px;
  background-color: ${({ bgColor, theme }): string => bgColor || theme.colors.button.main};
`

const Label = styled(DefaultText)<{ labelColor?: string }>`
  font-weight: 700;
  color: ${({ labelColor, theme }): string => labelColor || theme.colors.text.light};
`

interface Props {
  label: string | number
  onPress: () => void
  bgColor?: string
  labelColor?: string
}

const Button: React.FC<Props> = ({ label, onPress, labelColor, bgColor }) => (
  <Wrapper onPress={onPress} bgColor={bgColor}>
    <Label labelColor={labelColor}>{label}</Label>
  </Wrapper>
)

export default Button
