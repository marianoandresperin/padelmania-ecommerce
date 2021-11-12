import { useState, createContext, useContext } from "react";
const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const addItem = (item) => {
        const isInCart = cart.some((product) => product.id === item.id)
        
        if (!isInCart) {
            setCart([...cart, item]);
        } else {
            // const getQuantity = cart.find((product) => product.id === item.id)
            // setCart([...cart, (item.cantidad)])
        } 
    }
    const removeItem = (item) => {
        setCart(cart.filter(( item ) => item.id === !cart.id))
        console.log(cart)
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