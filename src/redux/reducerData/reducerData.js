const initialState = {
    isAuthorised: null,
    addedNewCardCar: null,
    deleteCardCar: null
}

export const reducerData = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTHORIZATION':
            return {...state, isAuthorised: action.payload}
        case 'ADD_NEW_CARD_CAR':
            return {...state, addedNewCardCar: action.payload}
        case 'DELETE_CARD_CAR':
            return {...state, deleteCardCar: action.payload}
        default:
            return state
    }
}
