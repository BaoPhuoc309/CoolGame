import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../ultility/status";
import axios from "../../Api/axios";
import { apiUrl } from "../../constants";
import { API_KEY } from "../../Api/api_key";


interface Stores {
    stores: {
        results: []
    };
    storesStatus: string;
    storesSingle: [];
    storesSingleStatus: string;
}

const initialState: Stores = {
    stores: {
        results: []
    },
    storesStatus: STATUS.IDLE,
    storesSingle: [],
    storesSingleStatus: STATUS.IDLE
}

export const fetchAsyncStores = createAsyncThunk("stores/fetch", async () => {
    const { data } = await axios.get(`${apiUrl.storesURL}?${API_KEY}`);
    return data
})

const storeSlice = createSlice({
    name: "store",
    initialState: initialState,
    reducers: {},
    extraReducers: (builed) => {
        builed
            .addCase(fetchAsyncStores.pending, (state) => {
                state.storesStatus = STATUS.LOADING
            })

            .addCase(fetchAsyncStores.fulfilled, (state, action) => {
                state.storesStatus = STATUS.SUCCEEDED
                state.stores = action.payload
            })

            .addCase(fetchAsyncStores.rejected, (state) => {
                state.storesStatus = STATUS.FAILED
            })
    }
})

export default storeSlice.reducer