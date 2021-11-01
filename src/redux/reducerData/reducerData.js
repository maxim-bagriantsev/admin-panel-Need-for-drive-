const initialState = {
    isAuthorised: null,
    addedImageCar: null,
}

export const reducerData = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTHORIZATION':
            return {...state, isAuthorised: action.payload}
        case 'ADD_IMAGE_CAR':
            return {...state, addedImageCar: action.payload}
        default:
            return state
    }
}
