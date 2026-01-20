const LOCAL_STORAGE_KEY = 'contact_list';

function saveTodosToStorage(todos) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
}

function getTodosFromStorage() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

export { LOCAL_STORAGE_KEY, getTodosFromStorage, saveTodosToStorage };