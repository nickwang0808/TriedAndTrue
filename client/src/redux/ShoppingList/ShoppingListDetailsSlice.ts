import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  // show the all the active shopping items
  showActive: boolean;
}
const initialState: IState = {
  showActive: true,
};

const shoppingListDetailSlice = createSlice({
  name: "shoppingListDetails",
  initialState,
  reducers: {
    setShowActive: (
      state,
      { payload }: PayloadAction<IState["showActive"]>
    ) => {
      state.showActive = payload;
    },
  },
});

export const { setShowActive } = shoppingListDetailSlice.actions;
export default shoppingListDetailSlice.reducer;
