function convertVND(amount: number): string {
  return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace('₫', 'đ');
}
export { convertVND };
