import { ADD_FAVORITE, TOGGLE_FAVORITES, REMOVE_FAVORITE} from "../actions/favoritesActions"


const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITES:
            return ({
                ...state,
                displayFavorites: !state.displayFavorites
            })

        case REMOVE_FAVORITE:
            return ({
                ...state,
                favorites: state.favorites.filter((item) => action.payload !== item.id)
            })

        case ADD_FAVORITE:
            const checkExisting = state.favorites.find((item) => item.id === action.payload.id)
            if (checkExisting) return state;
            else {
                return ({
                    ...state,
                    favorites: [...state.favorites, action.payload]
                })
            }
            
        default:
            return state
    }
}

export default reducer