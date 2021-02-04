import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  showAboutModal: boolean;
  showConfirmDelete: boolean;
}

const initialState: IState = {
  showAboutModal: false,
  showConfirmDelete: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setShowAboutModal: (
      state,
      { payload }: PayloadAction<IState["showAboutModal"]>
    ) => {
      state.showAboutModal = payload;
    },
    setShowDeleteAccountModal: (
      state,
      { payload }: PayloadAction<IState["showConfirmDelete"]>
    ) => {
      state.showConfirmDelete = payload;
    },
  },
});

export const {
  setShowAboutModal,
  setShowDeleteAccountModal,
} = profileSlice.actions;
export default profileSlice.reducer;
