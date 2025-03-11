# Lesson 2: Rest API
## REST API

### Mô hình 
![](https://www.scaler.com/topics/images/client-server-architecture.webp)

### Thành phần của Request
- Phương thức HTTP (GET, POST, PUT, DELETE)
- Endpoint (https://api.example.com/users)
- Headers (Authorization, Content-Type)
- Query Params / Path Params
- Request Body (Dữ liệu gửi đi, nếu có)

### Thành phần của Response
- Status Code (200, 201, 400, 404)
- Headers (Content-Type)
- Response Body (Dữ liệu trả về từ server)

### Vai trò của việc tách request thành nhiều thành phần trong API
1️. Giúp việc gửi - nhận dữ liệu hiệu quả hơn
- Kích thước request nhỏ hơn → Dữ liệu cần thiết mới được gửi, tránh dư thừa.
- Server chỉ đọc dữ liệu từ client khi thật sự cần thiết → Không lãng phí tài nguyên.

2️. Rõ ràng về ý định
- Mỗi thành phần có vai trò cụ thể → Method (GET, POST, PUT, DELETE) → Xác định loại hành động.
URL (/users/{id}) → Xác định tài nguyên.
- Headers (Authorization, Content-Type) → Thêm metadata cho request.
- Body (JSON/XML) → Chứa dữ liệu gửi đi khi cần.
- Điều này giúp client và server hiểu chính xác yêu cầu mà không bị mơ hồ.

3️. Linh hoạt
- Cho phép tái sử dụng và tùy chỉnh từng phần mà không làm rối toàn bộ request.
Ví dụ: Thay đổi Header (cách xác thực), nhưng không cần thay đổi toàn bộ API.

## Hiểu kĩ - API Request
### Method
1. Định nghĩa:
- HTTP Method (hay HTTP Verb) là phương thức định nghĩa trong giao thức HTTP để chỉ ra hành động mà client muốn thực hiện với tài nguyên trên server.

2. Các method phổ biến:
- GET: lấy dữ liệu.
- POST: thêm dữ liệu mới.
- PUT: update toàn bộ dữ liệu.
- PATCH: update từng phần.
- DELETE: xóa dữ liệu.
- HEAD: trả về headers.
- OPTIONS: kiểm tra các phương thức HTTP mà API hỗ trợ cho một endpoint.

### URL
1. Định nghĩa:
- URL (Uniform Resource Locator) là đường dẫn tới resource.
2. URL bao gồm:
- scheme: http (không bảo mật) or https (bảo mật)
- domain: tên miền; subdomain: phần đứng trước tên miền.
- path: đường dẫn tới dữ liệu con trong resource.
- queries: các thông tin bổ sung cho dữ liệu; có dạng key = value; query đầu tiên: theo sau bởi dấu ?; Từ query thứ hai: theo sau bởi dấu &.
- fragment: một vị trí neo trên trang web, không có tác dụng khi gửi lên server.

### Header
- Header: là dữ liệu đi đầu trong mỗi request.
- Là các cặp key-value trong request HTTP để truyền tải thông tin bổ sung giữa client và server.

### Body
- Body: phần dữ liệu được gửi trong một request API.
- Sử dụng khi chúng ta cần truyền thông tin đến server.
- Dữ liệu trong request body thường được gửi dưới định
dạng JSON, XML, hoặc Form-Data.

## Hiểu kĩ - API Response
### Status code
1. Status code: giúp client hiểu được kết quả của request gửi đến server.
2. Status code là một số gồm 3 chữ số, được chia thành 5 nhóm chính.
- Nhóm 1xx: Thông tin (Informational Responses)
- **100 Continue** → Server đã nhận phần đầu của request, client có thể tiếp tục gửi dữ liệu.
- **101 Switching Protocols** → Server đồng ý chuyển đổi giao thức theo yêu cầu của client.

- Nhóm 2xx: Thành công (Success Responses)
- **200 OK** → Request thành công, server trả về dữ liệu mong muốn.
- **201 Created** → Request thành công, tài nguyên mới đã được tạo.
- **202 Accepted** → Request được chấp nhận nhưng chưa xử lý xong.
- **204 No Content** → Request thành công nhưng không có dữ liệu phản hồi.

- Nhóm 3xx: Chuyển hướng (Redirection Responses)
- **301 Moved Permanently** → URL đã thay đổi vĩnh viễn, client nên cập nhật.
- **302 Found** → URL tạm thời thay đổi, client nên tiếp tục dùng URL cũ trong tương lai.

-  Nhóm 4xx: Lỗi từ phía Client (Client Error Responses)
- **400 Bad Request** → Request sai cú pháp hoặc thiếu dữ liệu.
- **401 Unauthorized** → Cần xác thực trước khi truy cập.
- **403 Forbidden** → Không có quyền truy cập tài nguyên.
- **404 Not Found** → Không tìm thấy tài nguyên trên server.
- **405 Method Not Allowed** → Phương thức HTTP không được hỗ trợ.
- **408 Request Timeout** → Request mất quá nhiều thời gian để xử lý.
- **429 Too Many Requests** → Quá nhiều request trong thời gian ngắn, bị giới hạn.

- Nhóm 5xx: Lỗi từ phía Server (Server Error Responses)
- **500 Internal Server Error** → Lỗi chung trên server.
- **501 Not Implemented** → Server chưa hỗ trợ phương thức HTTP yêu cầu.
- **502 Bad Gateway** → Server trung gian nhận phản hồi không hợp lệ từ server khác.
- **503 Service Unavailable** → Server tạm thời quá tải hoặc bảo trì.
- **504 Gateway Timeout** → Server trung gian không nhận được phản hồi từ server gốc kịp thời.

### Header
- Là phần thông tin metadata được server gửi kèm trong response trả về cho client.
- Chứa các thông tin quan trọng về cách xử lý response, bảo mật, caching và nhiều thông số kỹ thuật khác.
- Response headers được định dạng dưới dạng cặp key-value, ví dụ: Content-Type: application/json.

### Body
- Phần dữ liệu chính mà server gửi lại cho client sau khi xử lý một request HTTP thành công (hoặc thất bại). Nội dung của nó thường ở định dạng JSON, XML, HTML, hoặc văn bản thuần túy (Plain Text).

## Basic Javascript
### Khai báo biến
- Cấu trúc: const <tên biến> = <giá trị>
- Sử dụng từ khóa const để khai báo.

### In ra dữ liệu
- Sử dụng lệnh: console.log(<tên biến>) để in ra giá
trị của biến.
- Ví dụ: console.log("Hoai");