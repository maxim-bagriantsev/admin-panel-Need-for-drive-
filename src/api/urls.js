export const urls = {
    logIn: () => '/auth/login',// авторизация
    cardCar: () => '/db/car/',// добавление машины на сервер
    categoryId: () => '/db/category/', // запрос на категории авто
    allCar: () => '/db/car', // получение всех машин с сервера
    deleteCardCar: (carId) => `/db/car/${carId}`, // удаление машины с сервера
    categoryIdFilter: (selectedCategoryId) => (selectedCategoryId ? `/db/car?categoryId=${selectedCategoryId}` : '/db/car'), // запрос отфильтрованный список по категории
    orderAll: () => '/db/order?limit=4&page=0', // получение всех заказов
    filterOrder: (selectedItems) => `/db/order?createdAt[$gt]=${selectedItems.createdAt}${selectedItems.carId}&cityId=${selectedItems.cityId}&orderStatusId=${selectedItems.statusId}&limit=${5}&page=${selectedItems.currentPage}`, // получение отфильтрованных заказов
    orderComplete: () => `db/order/${'#'}` // смена статуса на подтверженный
}

