import { createSlice } from "@reduxjs/toolkit";
import { USERS } from "../../constant/userDataContant";
import { RootState } from "../../app/store";

const initialState: USERS = {
  message: "",
  users: [],
  totalPages: 0,
  currentPage: 1,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state: RootState) => state.users.users;

export default userSlice.reducer;
