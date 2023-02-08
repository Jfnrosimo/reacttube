import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",

  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { increment } = userSlice.actions;

export default userSlice.reducer;
