import { createContext, useContext, useEffect, useState } from "react"

// Menage cart context
const CartContext = createContext()
export const CartContextProvider = (props) => {
    const cart = CartDt()
    return <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)

const CartDt = () => {

    const [cartItems, setCartItems] = useState([])
    const [cartLoader, setCartLoader] = useState(true)

    const setItem = (data) => {
        setCartLoader(true)
        if (cartItems?.length) {
            const validation = cartItems.find(dt => dt.id === data.id)
            if (validation) {
                data.qty = data.qty + validation.qty
                const withoutThis = cartItems.filter(dt => dt.id !== data.id)
                console.log([...withoutThis, data])
                localStorage.setItem("pf-cart", JSON.stringify([...withoutThis, data]))
            } else {
                localStorage.setItem("pf-cart", JSON.stringify([...cartItems, data]))
            }
        } else {
            localStorage.setItem("pf-cart", JSON.stringify([data]))
        }
        setCartLoader(false)
        getCartItems()
    }

    const updateItem = (data) => {
        setCartLoader(true)
        const cartData = cartItems.filter(dt => dt.id !== data.id)
        localStorage.setItem("pf-cart", JSON.stringify([...cartData, data]))
        setCartLoader(false)
        getCartItems()
    }

    const deleteItem = (data) => {
        setCartLoader(true)
        const cartData = cartItems?.filter(dt => data !== dt.id)
        localStorage.setItem("pf-cart", JSON.stringify(cartData))
        setCartLoader(false)
        getCartItems()
    }

    const getCartItems = () => {
        setCartLoader(true)
        setCartItems(JSON.parse(localStorage.getItem("pf-cart")))
        setCartLoader(false)
        console.log(localStorage.getItem("pf-cart"))
    }

    // 

    useEffect(() => {
        getCartItems()
    }, [])

    return {
        cartItems,
        cartLoader,
        setItem,
        updateItem,
        deleteItem
    }
}
