import {
  createSlice,
  Slice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { INFTAssets, INFTActionPayload} from './types';

const initialState: INFTAssets  = {}

const nftState: Slice<INFTAssets> = createSlice({
  name: 'nfts',
  initialState,
  reducers: {
    setNFTAssets(state: INFTAssets, action: PayloadAction<INFTActionPayload>) {
      const { owner, data } = action.payload; 
      if (owner) {
          state[owner] = data;
      }
      return state;
    },
    resetNFTAssets() {
      return initialState;
    }
  },
});

export const { setNFTAssets, resetNFTAssets } = nftState.actions; 

export default nftState.reducer;