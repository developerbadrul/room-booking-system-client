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
    loading: boolean;
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
    },
    loading: true,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loggedInUser: (state, action) => {
            state.token = action.payload.token;
            state.data = action.payload.data;
            state.loading = false;
        },
        loggedOut: (state) => {
            state.token = undefined;
            state.data = {
                _id: undefined,
                name: undefined,
                email: undefined,
                phone: undefined,
                role: undefined,
                address: undefined,
            };
            state.loading = false;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { loggedInUser, loggedOut, setLoading } = authSlice.actions;
export const selectUser = (state: { auth: AuthState }) => state.auth;
export default authSlice.reducer;
