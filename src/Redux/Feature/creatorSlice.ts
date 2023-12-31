import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { STATUS } from "../../ultility/status";
import axios from "../../Api/axios";
import { apiUrl } from "../../constants";
import { API_KEY } from "../../Api/api_key";

interface CreatorInit {
    creators: {
        results: [];
        next: string | null;
        previous: string | null;
    },
    creatorsStatus: string;
}

const initialState = {
    creators: {
        results: [],
        next: null,
        previous: null,
    },
    creatorsStatus: STATUS.IDLE
} as CreatorInit

export const fetchAllCreators = createAsyncThunk("creators/fetch", async (page: number = 1) => {
    const { data } = await axios.get(`${apiUrl.creatorsURL}?${API_KEY}&page=${page}`)
    return data
})

const creatorSlice = createSlice({
    name: "creator",
    initialState: initialState,
    reducers: {},
    extraReducers: (builded) => {
        builded
            .addCase(fetchAllCreators.pending, (state) => {
                state.creatorsStatus = STATUS.LOADING
            })
            .addCase(fetchAllCreators.fulfilled, (state, action) => {
                state.creatorsStatus = STATUS.SUCCEEDED
                state.creators = action.payload
            })
            .addCase(fetchAllCreators.rejected, (state) => {
                state.creatorsStatus = STATUS.FAILED
            })
    }
})


export default creatorSlice.reducer