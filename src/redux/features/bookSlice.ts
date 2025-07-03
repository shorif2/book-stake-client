import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: ["something"],
};
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export default bookSlice.reducer;
