function saveToLocalStorageByName(names){
  
    let favorites = getLocalStorage();

    favorites.push(names);

    localStorage.setItem('Favorites', JSON.stringify(favorites));
}

function getLocalStorage(){

    let localStorageData = localStorage.getItem('Favorites');

    if(localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);
}

function removeFromLocalStorage(name){
    let favorites = getLocalStorage();

    let nameIndex = favorites.indexOf(name);

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

export { saveToLocalStorageByName, getLocalStorage, removeFromLocalStorage };