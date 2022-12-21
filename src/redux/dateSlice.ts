import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DateSlice = {
  date: Date;
};

const initialState: DateSlice = {
  date: new Date()
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    changeDate: (state, action: PayloadAction<Date>) => {
      state.date = action.payload;
    }
  }
});

export const { changeDate } = dateSlice.actions;

export default dateSlice.reducer;
