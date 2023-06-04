import { AnyAction, Dispatch, ThunkDispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { RootState } from 'store/rootReducer'

type AppDispatch = Dispatch & ThunkDispatch<{ appState: RootState }, null, AnyAction>

const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()

export default useAppDispatch
