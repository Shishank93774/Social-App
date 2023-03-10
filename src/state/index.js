import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    mode: "light",
    user: null,
    token: null,
    posts: [],
    followings: [],
};

export const authSlice = createSlice({
    name: "auth",
    INITIAL_STATE,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: state => {
            state.user = null;
            state.token = null;
        },
        setFollowing: (state, action) => {
            if (state.user) {
                state.user.followings = action.payload.followings;
            } else {
                console.log("Not a friend");
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setPost: (state, action) => {
            const updatedPost = state.posts.map(post => {
                if (post._id === action.payload.post._id) return action.payload.post;
                else return post;
            });
            state.posts = updatedPost;
        },
    }
});

export const { setMode, setLogin, setLogout, setFollowing, setPosts, setPost } = authSlice.actions;
export default authSlice.reducer;