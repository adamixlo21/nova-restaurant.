import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';

export interface CartItem {
    id: number;
    name: string;
    price: string;
    quantity: number;
    note: string;
}
interface AddToCartItem {
    id: number;
    name: string;
    price: string | null;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: AddToCartItem) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    updateItemNote: (id: number, note: string) => void;
    clearCart: () => void;
}
const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>(() => {
        const savedCart = localStorage.getItem('restaurant_cart');

        if (!savedCart) {
            return [];
        }

        try {
            return JSON.parse(savedCart);
        } catch {
            return [];
        }
    });
    useEffect(() => {
        localStorage.setItem('restaurant_cart', JSON.stringify(cart));
    }, [cart]);
    const addToCart = (item: AddToCartItem) => {
        if (item.price === null) return;

        const price = item.price;

        setCart((currentCart) => {
            const existingItem = currentCart.find(
                (cartItem) => cartItem.id === item.id,
            );

            if (existingItem) {
                return currentCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? {
                              ...cartItem,
                              quantity: cartItem.quantity + 1,
                          }
                        : cartItem,
                );
            }

            return [
                ...currentCart,
                {
                    id: item.id,
                    name: item.name,
                    price,
                    quantity: 1,
                    note: '',
                },
            ];
        });
    };

    const clearCart = () => {
        setCart([]);
    };


    const updateItemNote = (id: number, note: string) => {
        setCart((currentCart) =>
            currentCart.map((item) =>
                item.id === id ? { ...item, note } : item,
            ),
        );
    };
    const increaseQuantity = (id: number) => {
        setCart((currentCart) =>
            currentCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
            ),
        );
    };

    const decreaseQuantity = (id: number) => {
        setCart((currentCart) =>
            currentCart
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item,
                )
                .filter((item) => item.quantity > 0),
        );
    };
    const removeFromCart = (id: number) => {
        setCart((currentCart) => currentCart.filter((item) => item.id !== id));
    };
    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
                updateItemNote,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

    if (context === undefined) {
        throw new Error('useCart must be used inside a CartProvider');
    }

    return context;
}
