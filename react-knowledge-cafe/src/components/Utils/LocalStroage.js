const getDataFromLS = () =>{
    const data = localStorage.getItem('bookmark');
    return data ? JSON.parse(data) : []
}

const setDataToLS = (bookmark) =>{
    const dataStringyfied = JSON.stringify(bookmark);
    localStorage.setItem('bookmark', dataStringyfied)
}

const addToLS = (id) =>{
    const bookmark = getDataFromLS()
    bookmark.push(id)
    setDataToLS(bookmark)
}

const removeDataFromLS = (id) =>{
    const bookmarks = getDataFromLS()
    const remaining = bookmarks.filter((bookmark)=> bookmark !==id)
    setDataToLS(remaining)
}

export {addToLS, removeDataFromLS, getDataFromLS}