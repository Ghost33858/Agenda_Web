const LOCAL_STORAGE_KEY = 'contact_list';

function saveContactsToStorage(contactos) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactos));
}

function getContactsFromStorage() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

export { LOCAL_STORAGE_KEY, getContactsFromStorage, saveContactsToStorage };
