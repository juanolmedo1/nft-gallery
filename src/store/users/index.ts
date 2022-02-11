import {
  createSlice,
  Slice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { IUserState, INFTActionPayload, IBalanceActionPayload} from './types';

const initialState: IUserState  = {}

const usersState: Slice<IUserState> = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setNFTAssets(state: IUserState, action: PayloadAction<INFTActionPayload>) {
      const { owner, data } = action.payload; 
      if (owner && data) {
          state[owner] = {
            ...state[owner],
            nfts: data,
          };
      }
      return state;
    },
    resetNFTAssets() {
      return initialState;
    },
    setUserBalance(state: IUserState, action: PayloadAction<IBalanceActionPayload>) {
      const { owner, balance } = action.payload; 
      if (owner && balance){
        state[owner] = {
          ...state[owner],
          balance,
        }
      }
      return state;
    }
  },
});

export const { setNFTAssets, resetNFTAssets, setUserBalance } = usersState.actions; 

export default usersState.reducer;