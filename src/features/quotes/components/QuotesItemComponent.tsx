import React, { useMemo } from 'react'

import styled from '@emotion/native'

import { DefaultText } from 'components/styled/Text'
import { QuotesItem } from 'features/quotes/types'

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: ${({ theme }): string => theme.colors.background.secondary};
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({ theme }): string => theme.colors.border.main};
`

const PairTitle = styled(DefaultText)`
  color: ${({ theme }): string => theme.colors.text.light};
`

const RateWrapper = styled.View`
  align-items: flex-end;
`

const Rate = styled(DefaultText)`
  font-weight: bold;
  margin: 10px 0 5px;
  color: ${({ theme }): string => theme.colors.text.light};
`

const Change = styled(DefaultText)<{ isPositive: boolean }>`
  font-size: 12px;
  color: ${({ isPositive, theme }): string => (isPositive ? theme.colors.text.success : theme.colors.text.error)};
`

const HighestPrice = styled(DefaultText)`
  font-size: 10px;
  color: ${({ theme }): string => theme.colors.text.light};
`

interface Props {
  item: QuotesItem
}

const formatPercentChange = (item: string): string => (Number(item) * 100).toFixed(2)

const QuotesItemComponent: React.FC<Props> = ({ item }) => {
  const isPositive = useMemo(() => Number(item.percentChange) > 0, [item.percentChange])

  return (
    <Wrapper>
      <PairTitle>
        {item.from} / {item.to}
      </PairTitle>
      <RateWrapper>
        <HighestPrice>{item.highestBid}</HighestPrice>
        <Rate>{item.last}</Rate>
        <Change isPositive={isPositive}>{formatPercentChange(item.percentChange)}</Change>
      </RateWrapper>
    </Wrapper>
  )
}

export default QuotesItemComponent
