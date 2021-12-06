import { useState, createContext, useContext } from "react";
const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const addItem = (item) => {
        const isInCart = cart.some((product) => product.id === item.id);
        
        if (!isInCart) {
            setCart([...cart, item]);
            console.log(`Agregaste al carrito: ${item.cantidad}x ${item.title}.`);
        };
    };
    const removeItem = (item) => {
        const getIndex = cart.indexOf(item);
        cart.splice(getIndex, 1);
        console.log(`Eliminaste del carrito: ${item.cantidad}x ${item.title}.`);
        setCart([...cart]);
    };

    const clearCart = () => {
        setCart([]);
        console.log(`Se vacio el carrito.`);
    };
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;