import { baseApi } from "../../api/baseApi";
import { loggedInUser } from "./authSlice";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/auth/signup",
                method: "POST",
                body: data,
            }),
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    const token = result.data.token;
                    const userData = result.data.data;

                    localStorage.setItem("auth", JSON.stringify({
                        token,
                        user: userData
                    }));

                    dispatch(loggedInUser({ token, data: userData }));

                } catch (error) {
                    console.error("Login error:", error);
                }
            },
        }),
    })
});

export const { useLoginMutation, useRegisterMutation } = authApi;
