import GeneralRepositoryServices from './generalRepository';

class PaymentService {
  private repoPayment = new GeneralRepositoryServices<any>('payment');
  public createPayment = async (payment: any) => {
    return this.repoPayment.save(payment);
  };
}
const paymentService = new PaymentService();
export default paymentService;
