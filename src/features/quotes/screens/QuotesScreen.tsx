import React from 'react'

import styled from '@emotion/native'
import { Text } from 'react-native'

import useAppSelector from 'hooks/useAppSelector'

const Wrapper = styled.View``
const QuotesScreen: React.FC = () => {
  const { quotesList } = useAppSelector((state) => state.quotes)
  console.log(quotesList)

  return (
    <Wrapper>
      <Text>QuotesScreen</Text>
    </Wrapper>
  )
}

export default QuotesScreen
