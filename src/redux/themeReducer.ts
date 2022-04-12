import {ReducerType} from "./reducerType";


const initialThemeState = {
    theme: false,
}

export type InitialThemeStateType = typeof initialThemeState;

export const themeReducer = (state: InitialThemeStateType = initialThemeState, action: ReducerType): InitialThemeStateType => {

    switch (action.type) {
        case "ON-OFF-THEME":
            return {
                ...state,
                theme: !state.theme
            }
        default:
            return state;
    }
};


export const actionThemeReducer = {
    onOffTheme: () => ({type: "ON-OFF-THEME"} as const),
}

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never

export type ActionThemeReducerType = ReturnType<PropertiesType<typeof actionThemeReducer>>

