const initialState = {
    data: null,
}

export const reducerData = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ALL':
            return {...state,data: action.payload}
        default:
            return state
    }
}
