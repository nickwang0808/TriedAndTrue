import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  // show the all the active shopping items
  showActive: boolean;
  showItemDetails: string | null;
}
const initialState: IState = {
  showActive: true,
  showItemDetails: null,
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

    setShowItemDetails: (
      state,
      { payload }: PayloadAction<IState["showItemDetails"]>
    ) => {
      state.showItemDetails = payload;
    },
  },
});

export const {
  setShowActive,
  setShowItemDetails,
} = shoppingListDetailSlice.actions;
export default shoppingListDetailSlice.reducer;
