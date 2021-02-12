import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  // show the all the active shopping items
  showActive: boolean;
  showItemDetails: string | null;
  showConfigShoppingListModal: boolean;
  listId: string;
  showAddCustomIngredientModal: boolean;
}
const initialState: IState = {
  showActive: true,
  showItemDetails: null,
  showConfigShoppingListModal: false,
  listId: "",
  showAddCustomIngredientModal: false;
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
    },
    setShowAddCustomIngredientModal: (state, {payload}: PayloadAction<IState["showAddCustomIngredientModal"]>) => {
      state.showAddCustomIngredientModal = payload

    }
  },
});

export const {
  setShowActive,
  setShowItemDetails,
  setShowConfigShoppingListModal,
  setListid,
  setShowAddCustomIngredientModal
} = shoppingListDetailSlice.actions;
export default shoppingListDetailSlice.reducer;
