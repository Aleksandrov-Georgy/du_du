import { create } from 'zustand';
import { getCartDetails } from '../lib/get-cart-details';
import { API } from '../services/api-client';

export type CartStateItem = {
  id: number;
  quantity: number;
  name: string;
  price: number;
  imageUrl: string;
  pizzaSize?: number | null;
  type?: number | null;
  ingredients?: Array<{ name: string; price: number }>;
};

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];

  /** Получение товаров из корзины */
  fetchCartItems: () => Promise<void>;
  /** Запрос на обновление количества товара */
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;
  /** Запрос на добавление нового товара в корзину */
  addCartItem: (values: any) => Promise<void>;
  /** Запрос на удаление товара из корзины */
  removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  loading: false,
  error: false,
  totalAmount: 0,
  items: [],

  fetchCartItems: async () => {
    try {
      set({
        loading: true,
        error: false,
      });
      const data = await API.cart.fetchCart();
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({
        error: true,
      });
    } finally {
      set({
        loading: false,
      });
    }
  },
  removeCartItem: async (id: number) => {},
  updateItemQuantity: async (id: number, quantity: number) => {},
  addCartItem: async (values: any) => {},
}));
