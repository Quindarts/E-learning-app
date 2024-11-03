import axiosConfig from './axiosConfig';
import GeneralRepositoryServices from './generalRepository';

class OrderSerivce {
  private repoOrder = new GeneralRepositoryServices<any>('orders');

  public savingOrder = async (orderData: any) => {
    return await axiosConfig.post('/orders/saving-order', orderData);
  };
}
const orderService = new OrderSerivce();
export default orderService;
