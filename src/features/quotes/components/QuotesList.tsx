import React from 'react'

import styled from '@emotion/native'
import { FlatList, RefreshControl } from 'react-native'

import QuotesItemComponent from 'features/quotes/components/QuotesItemComponent'
import quotesSlice from 'features/quotes/mobxStore'
import { QuotesItem } from 'features/quotes/types'

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
  const renderItem = ({ item }: { item: QuotesItem }): JSX.Element => <QuotesItemComponent key={item.id} item={item} />

  return (
    <Wrapper>
      {quotesSlice.errorMessage && <ErrorBox>{quotesSlice.errorMessage}</ErrorBox>}
      <FlatList
        data={quotesSlice.quotes}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
      />
    </Wrapper>
  )
}

export default QuotesList
