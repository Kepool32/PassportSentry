import { User } from "../../models/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authFetching(state) {
      state.isLoading = true;
    },
    authFetchingSuccess(state, action: PayloadAction<User>) {
      state.isLoading = false;
      state.error = "";
      state.user = action.payload;
    },
    authFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearUserState(state) {
      state.user = null;
      state.isLoading = false;
      state.error = "";
    },
  },
});


export default userSlice.reducer;
