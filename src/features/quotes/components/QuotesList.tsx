import React, { useMemo } from 'react'

import styled from '@emotion/native'
import { FlatList, RefreshControl } from 'react-native'

import QuotesItemComponent from 'features/quotes/components/QuotesItemComponent'
import { QuotesItem } from 'features/quotes/types'
import useAppSelector from 'hooks/useAppSelector'

const Wrapper = styled.View`
  padding: 20px 16px;
  background-color: ${({ theme }): string => theme.colors.background.light};
`
const ErrorBox = styled.Text`
  color: ${({ theme }): string => theme.colors.text.error};
  margin: 5px 0;
`

interface Props {
  onRefresh: () => void
  isRefreshing: boolean
}

const QuotesList: React.FC<Props> = ({ onRefresh, isRefreshing }) => {
  const { quotes, errorMessage } = useAppSelector((state) => state.quotes)

  const quotesList = useMemo(() => Object.values(quotes), [quotes])

  const renderItem = ({ item }: { item: QuotesItem }): JSX.Element => <QuotesItemComponent key={item.id} item={item} />

  return (
    <Wrapper>
      {errorMessage && <ErrorBox>{errorMessage}</ErrorBox>}
      <FlatList
        data={quotesList}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
      />
    </Wrapper>
  )
}

export default QuotesList
