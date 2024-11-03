import { useState } from 'react';
import cartService from '@/services/cartService';
import useAppStore from '@/store/app';
import useUserStore from '@/store/auth/useUserStore';
import { Cart } from '@/types/cart.type';

export const useCart = () => {
  const [error, setError] = useState<string | null>(null);
  const { onLoading, unLoading } = useAppStore((s) => s);
  const carts = useUserStore((s) => s.carts);
  const setCart = useUserStore((s) => s.setCart);

  const fetchCartItems = async () => {
    onLoading();
    setError(null);
    try {
    } catch (err: any) {
      setError(err.message || 'Failed to fetch cart items');
    } finally {
      unLoading();
    }
  };

  const addCourseToCart = async (courseId: string) => {
    onLoading();
    setError(null);
    try {
      const response = await cartService.addCourseToCart(courseId);
      setCart(response.cart);
      return response;
    } catch (err: any) {
      setError(err.message || 'Failed to add course to cart');
    } finally {
      unLoading();
    }
  };

  const removeCourseFromCart = async (courseId: string) => {
    onLoading();
    setError(null);
    try {
      const response: any = await cartService.removeCourseFromCart(courseId);
      setCart(response.cart);
    } catch (err: any) {
      setError(err.message || 'Failed to remove course from cart');
    } finally {
      unLoading();
    }
  };

  const clearCart = async () => {
    onLoading();
    setError(null);
    try {
      await cartService.clearCart();
      setCart({} as Cart);
    } catch (err: any) {
      setError(err.message || 'Failed to clear cart');
    } finally {
      unLoading();
    }
  };

  return {
    carts,
    fetchCartItems,
    addCourseToCart,
    removeCourseFromCart,
    clearCart,
  };
};

export default useCart;
