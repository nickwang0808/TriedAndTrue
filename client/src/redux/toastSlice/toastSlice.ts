import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  showToast: string | null;
}

const initialState: IState = {
  showToast: null,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setShowToast: (state, { payload }: PayloadAction<IState["showToast"]>) => {
      state.showToast = payload;
    },
  },
});

export const { setShowToast } = toastSlice.actions;
export default toastSlice.reducer;
