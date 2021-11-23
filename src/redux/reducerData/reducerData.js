const initialState = {
    isAuthorised: null,
    addedCardCar: null,
    isPublishedCardCar: null,
    categoriesId: null,
    addedAllCar: null,
    deleteCardCar: null,
    filteredCategoryCars: null,
    addedCarByCard: null,

    selectedPeriodTime: 'За неделю',
    selectedCar: '',
    selectedTown: '5ea07ad3099b810b946c6254',
    selectedOrderStatus: '5e26a191099b810b946c5d89',
    filteredOrders: [],
    currentPage: 0
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

        // Выбор параметра на страницы "Заказы" состояние dropdowns
        case 'SELECT_PERIOD_TIME':
            return {...state, selectedPeriodTime: action.payload}
        case 'SELECT_CAR':
            return {...state, selectedCar: action.payload}
        case 'SELECT_TOWN':
            return {...state, selectedTown: action.payload}
        case 'SELECT_ORDER_STATUS':
            return {...state, selectedOrderStatus: action.payload}
        case 'ADD_CURRENT_PAGE':
            return {...state, currentPage: action.payload}

        // Получаем отфильтрованные заказы
        case 'IS_FILTERED_ORDER':
            return {...state, filteredOrders: action.payload}

        default:
            return state
    }
}
