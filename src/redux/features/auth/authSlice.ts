import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

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
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loggedInUser: (state, action) => {
            state.token = action.payload.token;
            state.data = action.payload.data;
            state.loading = false;
            // Persist token in localStorage
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("userData", JSON.stringify(action.payload.data));
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
            // Remove token from localStorage
            localStorage.removeItem("token");
            localStorage.removeItem("userData");
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        rehydrateUser: (state) => {
            const token = localStorage.getItem("token");
            const userData = localStorage.getItem("userData");
            if (token && userData) {
                state.token = token;
                state.data = JSON.parse(userData);
                state.loading = false;
            } else {
                state.loading = false;
            }
        }
    }
});

export const { loggedInUser, loggedOut, setLoading, rehydrateUser } = authSlice.actions;
export const selectUser = (state: RootState) => state.auth.data;
export const selectLoading = (state: RootState) => state.auth.loading;

export default authSlice.reducer;
