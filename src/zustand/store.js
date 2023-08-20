import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    devtools((set) => ({
      cartItems: [],
      totalItems: 0,
      addItemToCart: (product) => {
        set((state) => ({
          cartItems: [...state.cartItems, product],
          totalItems: state.totalItems + 1,
        }));
      },

      removeItemFromCart: (product) => {
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item !== product),
          totalItems: state.totalItems - 1,
        }));
      },
      increase: (product) => {
        // Increase the quantity of a specific product in the cart
        set((state) => ({
          cartItems: [...state.cartItems, product],
          totalItems: state.totalItems + 1,
        }));
      },
      decrease: (product) => {
        // Decrease the quantity of a specific product in the cart
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item !== product),
          totalItems: state.totalItems - 1,
        }));
      },
      itemQuantity: (product) => {
        set((state) => {
          const productIndex = state.cartItems.findIndex((item) => item.id === product.id);
          if (productIndex !== -1) {
            const updatedCartItems = state.cartItems.filter((item, index) => index !== productIndex);
            return {
              cartItems: updatedCartItems,
              totalItems: state.totalItems - 1,
            };
          }

          // If the product is not found, return the current state as is
          return state;
        });
      },
    })),

    {
      name: "pizzacabana",
      getStorage: () => localStorage,
    }
  )
);

export default useCartStore;
