// store for redux
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import themeReducer from "../features/theme/themSlice";
import UserCardReducer from "../features/users/UserCardSlice";
import { userDataApi } from "../api/userApi";

export const store = configureStore({
  reducer: {
    users: userReducer,
    theme: themeReducer,
    userCard: UserCardReducer,
    [userDataApi.reducerPath]: userDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userDataApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
