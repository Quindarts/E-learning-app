import { useState } from 'react';
import orderService from '@/services/orderService';

export const useOrder = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createOrder = async (orderData: any) => {
    setLoading(true);
    setError(null);
    try {
      const response: any = await orderService.savingOrder(orderData);
      if (response.success) {
        setOrders((prevOrders) => [...prevOrders, response.order]);
        return response;
      } else {
        setError(response.data.message || 'Failed to create order');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred while creating the order');
    } finally {
      setLoading(false);
    }
  };

  return {
    orders,
    loading,
    error,
    createOrder,
  };
};

export default useOrder;
