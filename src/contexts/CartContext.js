import { useState, createContext, useContext } from "react";
export const CartContext = createContext();
export const useCart = () => useContext(CartContext);
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log('cart', cart)
    
    const addItem = (item) => {
        const isInCart = cart.some((product) => product.id === item.id)
        
        if (!isInCart) {
            setCart([...cart, item]);
            console.log('cart', cart)
        } else {
            // const getQuantity = cart.find((product) => product.id === item.id)
            // setCart([...cart, (item.cantidad)])
        } 
    }
    const removeItem = (itemId) => {
        setCart(cart.filter((itemId) => itemId === !itemId))
        console.log(itemId)
    }

    const clearCart = () => {
        setCart([]);
        console.log("Se vacio el carrito")
    };
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;