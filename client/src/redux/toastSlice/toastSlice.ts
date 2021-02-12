import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  showToast: IShowToast | null;
}

export interface IShowToast {
  color?: string;
  text: string;
  time?: number; // in millisecond
}

const initialState: IState = {
  showToast: null,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setShowToast: (state, { payload }: PayloadAction<IState["showToast"]>) => {
      if (payload && !payload.color) {
        payload.color = "lightgreen";
      }
      state.showToast = payload;
    },
  },
});

export const { setShowToast } = toastSlice.actions;
export default toastSlice.reducer;
