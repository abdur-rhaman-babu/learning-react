const getDataFromLS = () =>{
    const data = localStorage.getItem('cart')
    if( data ){
        return JSON.parse(data)
    }
    return []
}

const setDataToLS = (cart) =>{
    const cartStringyfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringyfied)
}

const addToLS = id =>{
    const cart = getDataFromLS()
    cart.push(id)
    setDataToLS(cart)
}

export {addToLS, getDataFromLS}