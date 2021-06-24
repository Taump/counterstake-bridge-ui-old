import { createSlice } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { updateBridges } from './thunks';

export const bridgesSlice = createSlice({
  name: 'bridges',
  initialState: {
    inputs: [],
    loaded: false
  },
  extraReducers: {
    [updateBridges.fulfilled]: (state, action) => {
      state.inputs = action.payload;
      state.loaded = true;
    },

    [updateBridges.rejected]: (state) => {
      state.inputs = [];
      state.loaded = false;
      notification.open({
        message: 'Data update error',
        type: "error"
      })
    },
  }
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.auth.value)`

export default bridgesSlice.reducer;
