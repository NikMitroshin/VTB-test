import React, { useCallback } from 'react'

import styled from '@emotion/native'
import { useFocusEffect } from '@react-navigation/native'
import { Text } from 'react-native'

import { fetchQuotes } from 'features/quotes/store/actions/fetchEvents'
import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'

const Wrapper = styled.View``
const QuotesScreen: React.FC = () => {
  const { quotes } = useAppSelector((state) => state.quotes)
  const dispatch = useAppDispatch()

  const getQuotes = useCallback(() => {
    void dispatch(fetchQuotes())
  }, [])

  useFocusEffect(
    useCallback(() => {
      getQuotes()
    }, []),
  )

  console.log(quotes)

  return (
    <Wrapper>
      <Text>QuotesScreen</Text>
    </Wrapper>
  )
}

export default QuotesScreen
