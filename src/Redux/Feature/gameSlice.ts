import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../ultility/status";
import axios from "../../Api/axios";
import { apiUrl } from "../../constants";
import { API_KEY } from "../../Api/api_key";

interface Games {
    games: {
        results: [];
        next: string | null;
        previous: string | null;
    },
    gamesStatus: string;
    gamesSingle: object;
    gamesSingleStatus: string,
}


const initialState: Games = {
    games: {
        results: [],
        next: null,
        previous: null,
    },
    gamesStatus: STATUS.IDLE,
    gamesSingle: {},
    gamesSingleStatus: STATUS.IDLE,
};

export const fetchAsyncGames = createAsyncThunk("games/fetch", async (page: number | undefined = 1) => {
    const { data } = await axios.get(`${apiUrl.gamesURL}?${API_KEY}&page=${page}`);
    return data;
});

export const fetchAsyncGameDetails = createAsyncThunk('game/details/fetch', async (id: number) => {
    const { data } = await axios.get(`${apiUrl.gamesURL}/${id}?${API_KEY}`);
    return data;
})

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncGames.pending, (state) => {
                state.gamesStatus = STATUS.LOADING;
            })
            .addCase(fetchAsyncGames.fulfilled, (state, action) => {
                state.games = action.payload;
                state.gamesStatus = STATUS.SUCCEEDED;
            })
            .addCase(fetchAsyncGames.rejected, (state) => {
                state.gamesStatus = STATUS.FAILED;
            })
            .addCase(fetchAsyncGameDetails.pending, (state) => {
                state.gamesSingleStatus = STATUS.LOADING;
            })
            .addCase(fetchAsyncGameDetails.fulfilled, (state, action) => {
                state.gamesSingle = action.payload;
                state.gamesSingleStatus = STATUS.SUCCEEDED;
            })
            .addCase(fetchAsyncGameDetails.rejected, (state) => {
                state.gamesSingleStatus = STATUS.FAILED;
            });
    },
});

export default gameSlice.reducer;