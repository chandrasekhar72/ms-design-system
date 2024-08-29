import { createSlice } from "@reduxjs/toolkit";

interface AuthSliceInterface {
    time: string | null,
    remember: boolean,
}

const initialState: AuthSliceInterface = {
    time: "",
    remember: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.time = action.payload.time;
            state.remember = action.payload.remember;
        },
        logout: (state) => {
            state.time = null;
            state.remember = false;
        },
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer