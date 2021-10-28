const initialState = {
    isAuthorised: null,
}

export const reducerData = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTHORIZATION':
            return {...state, isAuthorised: action.payload}
        default:
            return state
    }
}
