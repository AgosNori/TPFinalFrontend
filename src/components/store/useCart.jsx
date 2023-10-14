import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/* hook para que permanezcan los productos  */
const useCart = create(
  
  persist(
    (set) => ({
      
      cart: [],
      addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
      clearCart: () => set(() => ({ cart: [] })),
      setCart: (cart) => set({ cart }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCart;
