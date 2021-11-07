const initialState = {
    isAuthorised: null,
    addedCardCar: null,
    isPublishedCardCar: null,
    categoriesId: null,
    addedAllCar: null,
    deleteCardCar: null,
    filteredCategoryCars: null,
    addedCarByCard: null
}

export const reducerData = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTHORIZATION':
            return {...state, isAuthorised: action.payload}
        case 'GET_CARD_CAR':
            return {...state, addedCardCar: action.payload}
        case 'SET_CARD_CAR':
            return {...state, isPublishedCardCar: action.payload}
        case 'SET_ALL_CATEGORY':
            return {...state, categoriesId: action.payload}
        case 'GET_ALL_CAR':
            return {...state, addedAllCar: action.payload}
        case 'DELETE_CARD_CAR':
            return {...state, deleteCardCar: action.payload}
        case 'GET_FILTER_CATEGORY_CARS':
            return {...state, filteredCategoryCars: action.payload}
        case 'ADD_CAR_BY_CARD':
            return {...state, addedCarByCard: action.payload}
        default:
            return state
    }
}
