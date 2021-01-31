import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  // show the all the active shopping items
  showActive: boolean;
  showItemDetails: string | null;
  showConfigShoppingListModal: boolean;
  listId: string;
}
const initialState: IState = {
  showActive: true,
  showItemDetails: null,
  showConfigShoppingListModal: false,
  listId: "",
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

    setShowConfigShoppingListModal: (
      state,
      { payload }: PayloadAction<IState["showConfigShoppingListModal"]>
    ) => {
      state.showConfigShoppingListModal = payload;
    },

    setListid: (state, {payload}: PayloadAction<IState["listId"]>) => {
      state.listId = payload
    }
  },
});

export const {
  setShowActive,
  setShowItemDetails,
  setShowConfigShoppingListModal,
  setListid
} = shoppingListDetailSlice.actions;
export default shoppingListDetailSlice.reducer;
