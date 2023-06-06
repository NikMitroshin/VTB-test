import React, { useCallback, useEffect, useState } from 'react'

import styled from '@emotion/native'
import { useFocusEffect } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import { Text } from 'react-native'

import QuotesList from 'features/quotes/components/QuotesList'
import quotesSlice from 'features/quotes/mobxStore'
import { StackNavProp, TabRouteNames } from 'types'

const Wrapper = styled.View`
  flex: 1;
`

const QuotesScreen: React.FC<StackNavProp<TabRouteNames.QUOTES>> = observer(() => {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [isNeedTimer, setIsNeedTimer] = useState(false)

  const getQuotes = useCallback(() => {
    void quotesSlice.fetchQuotes()
    setIsNeedTimer(true)
  }, [])

  useFocusEffect(
    useCallback(() => {
      getQuotes()

      return (): void => {
        setIsNeedTimer(false)
      }
    }, []),
  )

  useEffect(() => {
    const interval =
      isNeedTimer && !isRefreshing
        ? setInterval(() => {
            getQuotes()
          }, 1000 * 5)
        : null

    if (isRefreshing) {
      setIsRefreshing(false)
    }

    return () => {
      clearInterval(interval as NodeJS.Timer)
    }
  }, [isNeedTimer, isRefreshing])

  const onRefresh = (): void => {
    setIsRefreshing(false)
    getQuotes()
  }

  return (
    <Wrapper>
      <Text>{quotesSlice.errorMessage}</Text>
      <QuotesList onRefresh={onRefresh} isRefreshing={isRefreshing} />
    </Wrapper>
  )
})

export default QuotesScreen
