import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { STATUS } from "../../ultility/status"
import axios from "../../Api/axios";
import { API_KEY } from "../../Api/api_key"
import { apiUrl } from "../../constants";


interface Genres {
    genres: {
        results: []
    },
    genresStatus: string
}


const initialState = {
    genres: {
        results: [],
    },
    genresStatus: STATUS.IDLE
} as Genres

export const fetchAsyncGenres = createAsyncThunk("genres/fetch", async (page: number | undefined = 1) => {
    const { data } = await axios.get(`${apiUrl.genresURL}?${API_KEY}&page=${page}`);
    return data
})

const genreSlice = createSlice({
    name: "genre",
    initialState: initialState,
    reducers: {},
    extraReducers: (builed) => {
        builed
            .addCase(fetchAsyncGenres.pending, (state) => {
                state.genresStatus = STATUS.LOADING
            })

            .addCase(fetchAsyncGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
                state.genresStatus = STATUS.SUCCEEDED;
            })

            .addCase(fetchAsyncGenres.rejected, (state) => {
                state.genresStatus = STATUS.FAILED;
            })
    }
})

export default genreSlice.reducer