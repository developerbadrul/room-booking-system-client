import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    token?: string;
    data: {
        _id?: string;
        name?: string;
        email?: string;
        phone?: string;
        role?: string;
        address?: string;
    };
}

const initialState: AuthState = {
    token: undefined,
    data: {
        _id: undefined,
        name: undefined,
        email: undefined,
        phone: undefined,
        role: undefined,
        address: undefined,
    }
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loggedInUser: (state, action) => {
            state.token = action.payload.token;
            state.data = action.payload.data;
        },
        loggedOutUser: (state) => {
            state.token = undefined;
            state.data = {
                _id: undefined,
                name: undefined,
                email: undefined,
                phone: undefined,
                role: undefined,
                address: undefined,
            };
        },
    }
});

export const { loggedInUser, loggedOutUser } = authSlice.actions;

export default authSlice.reducer;
