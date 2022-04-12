import {combineReducers, createStore} from "redux";
import {themeReducer} from "./themeReducer";
import {skillsReducer} from "./skillsReducer";

const reducers = combineReducers({
    skills: skillsReducer,
    theme: themeReducer
});

export type IGlobalState = ReturnType<typeof reducers>;

export const store = createStore(reducers);

// export const store = createStore(reducers, loadState());

/*
store.subscribe(() => {
    saveState({
        favoritesFilms: store.getState().favoritesFilms,
        theme: store.getState().theme.theme
    });
});*/
