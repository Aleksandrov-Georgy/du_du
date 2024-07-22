import { create } from 'zustand';
import { getCartDetails } from '../lib/get-cart-details';
import { API } from '../services/api-client';
import { CreateCartItemValues } from '../services/dto/cart.dto';

export type CartStateItem = {
  id: number;
  quantity: number;
  name: string;
  price: number;
  imageUrl: string;
  pizzaSize?: number | null;
  pizzaType?: number | null;
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
      const data = await API.cart.getCart();
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
  updateItemQuantity: async (id: number, quantity: number) => {
    try {
      set({
        loading: true,
        error: false,
      });
      const data = await API.cart.updateItemQuantity(id, quantity);
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
  removeCartItem: async (id: number) => {
    try {
      set({
        loading: true,
        error: false,
      });
      const data = await API.cart.removeCartItem(id);
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
  addCartItem: async (values: CreateCartItemValues) => {
    try {
      set({
        loading: true,
        error: false,
      });
      const data = await API.cart.addCartItem(values);
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
}));
