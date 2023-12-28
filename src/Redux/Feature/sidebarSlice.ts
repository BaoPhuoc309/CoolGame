import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
    sidebarStatus: boolean;
}


const initialState: SidebarState = {
    sidebarStatus: false
}

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: initialState,
    reducers: {
        setSidebarOn: (state) => {
            state.sidebarStatus = true;
        },

        setSidebarOff: (state) => {
            state.sidebarStatus = false;
        }
    }
})

export const { setSidebarOn, setSidebarOff } = sidebarSlice.actions;
export default sidebarSlice.reducer;