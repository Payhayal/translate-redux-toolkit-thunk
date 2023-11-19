import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions/userActions";

const initialState = {
    users:[],
    isLoading:true,
    isError:false,
};

const userSlice = createSlice({
    name:"users",
    initialState,
    // thunk aksiyonlarini yonetmek icin extraReducers kullanilacak
    extraReducers:{

        // api`den cvp gelmediyse
        [getUsers.pending]: (state) => {
            state.isLoading = true;
        },
        // api`den olumlu cvp geldiyse
        [getUsers.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
            state.isError = false;
        },
        // api`den olumsuz cvp geldiyse
        [getUsers.rejected]:(state) => {
            state.isLoading = false;
            state.isError = true;
        },
    },
    
});

export default userSlice.reducer;