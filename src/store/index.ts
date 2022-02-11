import {
	combineReducers,
	configureStore,
} from '@reduxjs/toolkit';
import nftsReducer from './nfts';
  
const store = configureStore({
	reducer: combineReducers({
		nfts: nftsReducer,
	})
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
  
export default store;