# Key Takeaways – Lesson 07: WebSocket & API Testing with Postman


## 1. Kết nối vào Cơ sở dữ liệu (CSDL)

- **CSDL (Cơ sở dữ liệu)** là nơi lưu trữ và tổ chức dữ liệu cho hệ thống, giúp backend hoạt động chính xác.
- Một số hệ quản trị phổ biến: **MySQL, PostgreSQL, MongoDB, Oracle, SQL Server**.
- **Mục đích khi test API cần kết nối CSDL**:
  - Kiểm tra dữ liệu đã **được ghi đúng** sau khi gọi API `create/update/delete`.
  - Đối chiếu dữ liệu **trả về từ API** có khớp với dữ liệu trong DB không.
  -  **Chuẩn bị dữ liệu test** bằng cách chèn tay hoặc query trước khi gọi API.
  -  **Xóa dữ liệu test** sau khi test xong để môi trường sạch sẽ.
- **Các truy vấn thường dùng**:
  - `SELECT * FROM <table_name>;` – Truy vấn tất cả dữ liệu trong bảng.
  - `SELECT COUNT(*) FROM <table_name>;` – Đếm số bản ghi.
  - `SELECT * FROM <table_name> WHERE condition;` – Lọc dữ liệu theo điều kiện.
  - `ORDER BY column ASC|DESC;` – Sắp xếp dữ liệu.
  - `LIMIT n;` – Giới hạn số lượng bản ghi.

---

## 2. API Documentation

- **API Documentation** là tài liệu mô tả cách dùng một API cụ thể.
- Bao gồm:
  - Endpoint (ví dụ: `/api/users`)
  - Phương thức HTTP (`GET`, `POST`, `PUT`, `DELETE`)
  - Tham số cần truyền (`query`, `body`, `headers`)
  - Định dạng dữ liệu (`JSON`, `XML`)
  - Ví dụ request/response mẫu.
- **Lợi ích**:
  - Giúp dev và tester **hiểu chính xác API hoạt động thế nào**.
  - **Giảm trao đổi không cần thiết** giữa các team.
  - Hỗ trợ việc viết test script và automation nhanh hơn.
- **Công cụ tạo tài liệu API phổ biến**:
  - [Swagger/OpenAPI](https://swagger.io/)
  - Postman (giao diện Docs riêng cho mỗi collection)
  - Google Docs / Excel (thường dùng nội bộ hoặc gửi khách hàng khi không dùng Swagger)

---

## 3. Tính năng nâng cao của Postman

- **Flow**: Tạo kịch bản test nhiều bước có điều kiện (ví dụ: login → lấy token → gọi API khác).
- **API tab**: Quản lý toàn bộ lifecycle của API: define, mock, test, monitor.
- **Mock Server**:
  - Tạo endpoint ảo để frontend có thể tích hợp trước khi backend xong.
  - Dùng cho test case chưa có backend thực sự.
- **Monitor**:
  - Chạy request định kỳ (theo giờ/ngày).
  - Kiểm tra uptime API và cảnh báo khi lỗi xảy ra.

---

## 4. Giới thiệu về WebSocket

- **WebSocket** là giao thức truyền thông hai chiều (bidirectional) qua 1 kết nối TCP duy nhất.
- **Hoạt động như sau**:
  - Client gửi HTTP request chứa `Upgrade: websocket`.
  - Server phản hồi `101 Switching Protocols`.
  - Kết nối chuyển sang WebSocket (`ws://` hoặc bảo mật `wss://`).
- **Ưu điểm WebSocket so với HTTP**:
  - Không cần tạo lại kết nối mỗi lần gửi dữ liệu.
  - Không cần gửi lại headers mỗi request như HTTP.
  - Độ trễ thấp, phù hợp cho ứng dụng cần cập nhật thời gian thực.

---

## 5. Best Practices khi test WebSocket

- **Kiểm tra Handshake**:
  - Đảm bảo server trả `HTTP 101 Switching Protocols`.
- **Test với tải cao**:
  - Kiểm tra xem server có duy trì được nhiều kết nối WebSocket cùng lúc không.
- **Kiểm tra gửi/nhận message**:
  - So sánh dữ liệu đầu vào với phản hồi từ server.
  - Đảm bảo dữ liệu không bị méo/thiếu.
- **Xử lý disconnect/reconnect**:
  - Kiểm tra app có tự kết nối lại khi rớt mạng không.
- **Bảo mật**:
  - Luôn dùng `wss://` (WebSocket Secure).
  - Kiểm tra xem dữ liệu có bị rò rỉ hay không.
- **Đo hiệu năng**:
  - Tính toán `latency` (thời gian phản hồi).
  - Đo `throughput` (số lượng message xử lý mỗi giây).

---

## 6. Dùng Postman để test WebSocket

- **Tạo WebSocket connection**:
  - Vào Postman → New → WebSocket Request.
  - Nhập URL ví dụ `wss://echo.websocket.org`.
- **Gửi và nhận message**:
  - Nhập nội dung JSON hoặc text.
  - Bấm "Send", xem phản hồi ở panel bên phải.
- **Xử lý event**:
  - Quan sát các loại message, kết nối thành công/thất bại, reconnect…

---
