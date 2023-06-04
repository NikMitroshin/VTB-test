import React from 'react'

import styled from '@emotion/native'

import Button from 'components/Button'
import { DefaultTitle } from 'components/styled/Text'
import useAppNavigation from 'hooks/useAppNavigate'
import { StackNavProp, TabRouteNames } from 'types'

const Wrapper = styled.View`
  flex: 1;
  padding: 20px 16px;
`
const Title = styled(DefaultTitle)``
const AboutAppScreen: React.FC<StackNavProp<TabRouteNames.ABOUT_APP>> = () => {
  const navigation = useAppNavigation()

  const handlePress = (): void => {
    navigation.navigate(TabRouteNames.QUOTES)
  }

  return (
    <Wrapper>
      <Title>Test app for VTB</Title>
      <Button label='Посмотреть котировки' onPress={handlePress} margin='30px 0 0 0' />
    </Wrapper>
  )
}

export default AboutAppScreen
