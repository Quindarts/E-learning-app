import { useState } from 'react';
import cartService from '@/services/cartService';
import { Cart } from '@/types/cart.type';

export const useCart = () => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all items in the cart
  const fetchCartItems = async () => {
    setLoading(true);
    setError(null); // Clear any previous error
    try {
      const response: any = await cartService.getCartItems();
      setCart(response.cart); // Assuming response has a cart object
    } catch (err: any) {
      setError(err.message || 'Failed to fetch cart items');
    } finally {
      setLoading(false);
    }
  };

  // Add course to cart
  const addCourseToCart = async (courseId: string) => {
    setLoading(true);
    setError(null);
    try {
      const response: any = await cartService.addCourseToCart(courseId);
      setCart(response.cart); // Assuming response has the updated cart
    } catch (err: any) {
      setError(err.message || 'Failed to add course to cart');
    } finally {
      setLoading(false);
    }
  };

  // Remove course from cart
  const removeCourseFromCart = async (courseId: string) => {
    setLoading(true);
    setError(null);
    try {
      const response: any = await cartService.removeCourseFromCart(courseId);
      setCart(response.cart); // Assuming response has the updated cart
    } catch (err: any) {
      setError(err.message || 'Failed to remove course from cart');
    } finally {
      setLoading(false);
    }
  };

  // Clear cart
  const clearCart = async () => {
    setLoading(true);
    setError(null);
    try {
      await cartService.clearCart();
      setCart(null); // Clear the cart locally
    } catch (err: any) {
      setError(err.message || 'Failed to clear cart');
    } finally {
      setLoading(false);
    }
  };

  return {
    cart,
    loading,
    error,
    fetchCartItems,
    addCourseToCart,
    removeCourseFromCart,
    clearCart,
  };
};

export default useCart;
