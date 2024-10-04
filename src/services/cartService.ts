import axiosConfig from './axiosConfig';

// Add course to cart
const addCourseToCart = async (courseId: string) => {
  return await axiosConfig.post('/cart/add', { courseId });
};

// Remove course from cart
const removeCourseFromCart = async (courseId: string) => {
  return await axiosConfig.post('/cart/remove', { courseId });
};

// Get all items in the cart
const getCartItems = async () => {
  return await axiosConfig.get('/cart');
};

// Clear the cart
const clearCart = async () => {
  return await axiosConfig.post('/cart/clear');
};

const cartService = {
  addCourseToCart,
  removeCourseFromCart,
  getCartItems,
  clearCart,
};

export default cartService;
