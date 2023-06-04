import { useNavigation } from '@react-navigation/native'

import { AppNavigation } from 'types'

const useAppNavigation = () => useNavigation<AppNavigation>()

export default useAppNavigation
