import styled from '@emotion/native'

export const DefaultText = styled.Text`
  font-size: 16px;
  color: ${({ theme }): string => theme.colors.text.main};
`

export const DefaultTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }): string => theme.colors.text.main};
`
