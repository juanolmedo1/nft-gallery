import {
	combineReducers,
	configureStore,
} from '@reduxjs/toolkit';
import usersReducer from './users';
  
const store = configureStore({
	reducer: combineReducers({
		users: usersReducer,
	})
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
  
export default store;