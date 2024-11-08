# E-learning-app

## Giới thiệu

Đây là một ứng dụng e-learning phát triển bằng React Native sử dụng Expo. Dự án này hỗ trợ nền tảng Android, iOS và web, giúp người dùng học trực tuyến một cách hiệu quả.

## Cấu trúc thư mục

- **components**: Chứa các thành phần giao diện dùng chung.
- **hook**: Xử lí logic khi nhận response từ be
- **layout**: Định nghĩa các bố cục cho ứng dụng.
- **navigator**: Cài đặt hệ thống định tuyến (navigation) cho ứng dụng.
- **screen**: Các màn hình (screens) chính của ứng dụng.
- **services**: Chứa các file liên quan đến việc gọi API và các dịch vụ khác.
- **store**: Quản lý state của ứng dụng (Zustand).
- **theme**: Các định nghĩa về màu sắc, font chữ và style chung.
- **types**: Định nghĩa kiểu dữ liệu TypeScript.
- **utils**: Các hàm tiện ích dùng trong toàn bộ ứng dụng.

## Tính năng chính

- **Thanh toán khoá học**:
  Click vào `enrolled course` thì sẽ thêm khoá học vào giỏ hàng (cart), sau đó navigate tới trang thanh toán (overview lại course, thông tin thanh toán, chọn coupon).
  Click `started` sẽ gửi request chứa coupon về cho backend xử lí, thành công clear carts gửi reponse cho fe navigate tới trang thanh toán thành công.
  Ngoài ra khi click `goback` để thoát khỏi course khi chưa thanh toán thành công sẽ clear cart.
- **Filter khoá học**:
  Sử dụng useDebounce để tự động gửi api sau 1 khoảng thời gian.
  Có thể chọn menu để để chọn trường search.
  Chọn category để lọc ra các loại khoá học.

## Yêu cầu

- **Node.js** >= 14.x
- **npm** >= 6.x

## Cài đặt

Để cài đặt và chạy dự án này, bạn cần làm theo các bước sau:

1. Clone dự án về máy:
   ```sh
   git clone https://github.com/Quindarts/E-learning-app.git
   ```
2. Cài đặt các phụ thuộc:
   ```sh
   npm install
   ```
3. Tạo file `.env` và cấu hình các biến môi trường cần thiết.

## Các lệnh hữu ích

- `npm start`: Khởi chạy ứng dụng bằng Expo.
- `npm run st`: Khởi chạy ứng dụng bằng tunnel.
- `npm run android`: Chạy ứng dụng trên Android.
- `npm run ios`: Chạy ứng dụng trên iOS.
- `npm run web`: Chạy ứng dụng trên web.

## Screenshots

### Home Screen

![Home Screen](assets/web/home.png)

### Course Overview

![Course Overview](assets/web/les-overview.png)

### Lesson Details

![Lesson Details](assets/web/detail-overview.png)

### Payment

![Payment](assets/web/detail-payment.png)

### Profile

![Profile](assets/web/profile.png)
