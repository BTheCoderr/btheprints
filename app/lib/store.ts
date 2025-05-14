import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getSubtotal: () => number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => set((state) => {
        // Check if item already exists with the same id and size
        const existingItemIndex = state.items.findIndex(
          (i) => i.id === item.id && i.size === item.size
        );
        
        // If item exists, update quantity
        if (existingItemIndex !== -1) {
          const newItems = [...state.items];
          newItems[existingItemIndex].quantity += item.quantity;
          return { items: newItems };
        }
        
        // Otherwise add new item
        return { items: [...state.items, item] };
      }),
      
      removeItem: (id, size) => set((state) => ({
        items: state.items.filter((item) => !(item.id === id && item.size === size))
      })),
      
      updateQuantity: (id, size, quantity) => set((state) => ({
        items: state.items.map((item) => 
          item.id === id && item.size === size 
            ? { ...item, quantity } 
            : item
        )
      })),
      
      clearCart: () => set({ items: [] }),
      
      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      getSubtotal: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    }),
    {
      name: 'btheprints-cart', // localStorage key
    }
  )
);

export default useCartStore; 