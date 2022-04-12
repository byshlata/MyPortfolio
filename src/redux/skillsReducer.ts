import {ReducerType} from "./reducerType";




const MySkillsInitialState = {
    skills: ['React', 'Redux', 'HTML', 'JavaScript' ,'TypeScript', 'Sass', 'Css', 'Unit test', 'StoryBook'],
    React: 'https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png',
    Redux: 'http://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png',
    HTML: 'https://cutewallpaper.org/24/html-logo-png/22-html5-logo-png-icon-logo-design.png',
    JavaScript: 'https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png',
    TypeScript: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_official_icon_130107.png',
    Sass: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_sass_icon_130182.png',
    Css: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png',
    'Unit test': 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_jest_icon_130514.png',
    StoryBook: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_storybook_icon_130145.png'
}


export type SkillsType = typeof MySkillsInitialState;

export const skillsReducer = (state: SkillsType = MySkillsInitialState, action: ReducerType): SkillsType => {

    switch (action.type) {
        default:
            return state;
    }
};



// export const actionFavoritesReducer = {
//     addFavoritesFilm: (searchResponse: SearchResponseType) => ({type: "ADD-FAVORITES-FILM", searchResponse,} as const),
//     removeFavoritesFilm: (imdbID: string) => ({type: "REMOVE-FAVORITES-FILM", imdbID} as const),
//     removeALLFavoritesFilms: () => ({type: "REMOVE-ALL-FAVORITES-FILMS",} as const),
//     searchTitle: (title: string) => ({type: "SEARCH-TITLE-FILM", title} as const),
//     errorReason: (errorValue: string) => ({type: "ERROR-REASON", errorValue} as const)
// }



//
// type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
//
// export type ActionFavoritesReducerType = ReturnType<PropertiesType<typeof actionFavoritesReducer>>

