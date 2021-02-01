import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  showAboutModal: boolean;
}

const initialState: IState = {
  showAboutModal: false,
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
  },
});

export const { setShowAboutModal } = profileSlice.actions;
export default profileSlice.reducer;
