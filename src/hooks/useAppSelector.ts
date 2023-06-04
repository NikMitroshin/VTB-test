import { TypedUseSelectorHook, useSelector } from 'react-redux'

import type { RootState } from 'store/rootReducer'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector
