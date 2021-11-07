export const urls = {
    logIn: () => '/auth/login',// авторизация
    cardCar: () => '/db/car/',// добавление машины на сервер
    categoryId: () => '/db/category/', // запрос на категории авто
    allCar: () => '/db/car', // получение всех машин с сервера
    deleteCardCar: (carId) => `/db/car/${carId}`, // удаление машины с сервера
    categoryIdFilter: (selectedCategoryId) => (selectedCategoryId ? `/db/car?categoryId=${selectedCategoryId}` : '/db/car'), // запрос отфильтрованный список по категории
}
