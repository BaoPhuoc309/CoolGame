import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "../Feature/genreSlice";
import gameReducer from "../Feature/gameSlice";
import sidebarReducer from "../Feature/sidebarSlice";
import storeReducer from "../Feature/storeSlice";
import creatorReducer from "../Feature/creatorSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        genre: genreReducer,
        game: gameReducer,
        sidebar: sidebarReducer,
        store: storeReducer,
        creator: creatorReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector