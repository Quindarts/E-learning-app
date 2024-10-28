import paymentService from '@/services/paymentService';
import { useState } from 'react';

export const usePayment = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [payment, setPayment] = useState<any | null>(null);
  const createPayment = async (payment: any) => {
    setLoading(true);
    try {
      const response = await paymentService.createPayment(payment);
      return response;
    } catch (err: any) {
      setError(err.message || 'Failed to create payment');
    } finally {
      setLoading(false);
    }
  };
  return { createPayment };
};
