import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataDefault: {
    dataSearch: [],
  },
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    actionData: (state, action) => {
      state.dataDefault = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { actionData } = appSlice.actions;

export default appSlice.reducer;
