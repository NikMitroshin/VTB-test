import React, { useMemo } from 'react'

import styled from '@emotion/native'
import { FlatList, RefreshControl, Text } from 'react-native'

import { QuotesItem } from 'features/quotes/types'
import useAppSelector from 'hooks/useAppSelector'

const Wrapper = styled.View`
  padding: 0 16px;
  background-color: ${({ theme }): string => theme.colors.background.light};
`

interface Props {
  onRefresh: () => void
  isRefreshing: boolean
}

const QuotesList: React.FC<Props> = ({ onRefresh, isRefreshing }) => {
  const { quotes } = useAppSelector((state) => state.quotes)

  const quotesList = useMemo(() => Object.values(quotes), [quotes])

  const renderItem = ({ item }: { item: QuotesItem }): JSX.Element => <Text key={item.id}>{item.from}</Text>

  return (
    <Wrapper>
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
