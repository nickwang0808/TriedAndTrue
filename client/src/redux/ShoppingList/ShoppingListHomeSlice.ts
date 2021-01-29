import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  // show the all the active shopping items
  showAddNewListModal: boolean;
}
const initialState: IState = {
  showAddNewListModal: true,
};

const shoppingListHomeSlice = createSlice({
  name: "shoppingListHome",
  initialState,
  reducers: {
    setShowAddNewListModal: (
      state,
      { payload }: PayloadAction<IState["showAddNewListModal"]>
    ) => {
      state.showAddNewListModal = payload;
    },
  },
});

export const { setShowAddNewListModal } = shoppingListHomeSlice.actions;
export default shoppingListHomeSlice.reducer;
