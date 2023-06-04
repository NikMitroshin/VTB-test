import React from 'react'

import { Text, View } from 'react-native'

import Button from 'components/Button'
import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'
import { setTest } from 'store/slices/testSlice'
import { StackNavProp, TabRouteNames } from 'types'

const MainScreen: React.FC<StackNavProp<TabRouteNames.MAIN_SCREEN>> = () => {
  const { testCounter } = useAppSelector((state) => state.test)

  const dispatch = useAppDispatch()

  const handlePress = (): void => {
    dispatch(setTest(testCounter + 1))
  }

  return (
    <View>
      <Text>Main screen content</Text>
      <Button label={`${testCounter} clicks`} onPress={handlePress} />
    </View>
  )
}

export default MainScreen
