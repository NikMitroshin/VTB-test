import React, { useCallback, useEffect, useState } from 'react'

import styled from '@emotion/native'
import { useFocusEffect } from '@react-navigation/native'

import QuotesList from 'features/quotes/components/QuotesList'
import { fetchQuotes } from 'features/quotes/store/actions/fetchEvents'
import useAppDispatch from 'hooks/useAppDispatch'
import { StackNavProp, TabRouteNames } from 'types'

const Wrapper = styled.View`
  flex: 1;
`

const QuotesScreen: React.FC<StackNavProp<TabRouteNames.QUOTES>> = () => {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [isNeedTimer, setIsNeedTimer] = useState(false)

  const dispatch = useAppDispatch()

  const getQuotes = useCallback(() => {
    void dispatch(fetchQuotes())
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
      <QuotesList onRefresh={onRefresh} isRefreshing={isRefreshing} />
    </Wrapper>
  )
}

export default QuotesScreen
