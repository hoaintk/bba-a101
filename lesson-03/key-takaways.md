# Authentication & Authorization
## Authentication
- Quá trình xác thực danh tính người dùng hoặc hệ thống.
- Trả lời câu hỏi: Tôi là ai?
## Authorization
- Quá trình xác thực quyền truy cập của người dùng sau khi xác thực.
- Trả lời câu hỏi: Tôi có quyền làm gì?
## Mục đích
- Sử dụng Authentication & Authorization để bảo vệ tài nguyên hệ thống, nhằm giúp xác định người dùng nào được quyền truy cập vào dữ liệu và chức năng phù hợp với vai trò của họ.
## Terms
1. Username & Password
2. Session, cookie:
- Session là một cơ chế lưu trữ trạng thái của người dùng trên server. Khi client gửi yêu cầu đăng nhập, server tạo một session và gửi lại một session ID để client sử dụng trong các yêu cầu tiếp theo.
- Cookie là một cách khác để lưu trữ thông tin trạng thái trên trình duyệt của client. Nó thường được sử dụng để duy trì phiên đăng nhập hoặc lưu trữ tùy chọn của người dùng.
3. Base64 encode/decode:
- Biến đổi 1 chuỗi gốc thành 1 chuỗi mã hóa theo thuật toán mã hóa Base64.
4. Token:
- Một chuỗi ký tự ngẫu nhiên dùng để xác thực người dùng hoặc ứng dụng.
- Bao gồm: Session Token, Bearer Token, JWT, Refresh Token.
- Refresh Token: một loại token dùng để cấp mới Access Token khi Access Token hết hạn, giúp người dùng không phải đăng nhập lại.
- API Key: là một chuỗi ký tự duy nhất được cấp cho người dùng hoặc ứng dụng để xác thực khi gọi API. Nó giúp quản lý quyền truy cập và theo dõi việc sử dụng API.
## Authentication Methods
1. Session - Cookie Auth
- Là phương thức xác thực phổ biến trên web.
- Khi người dùng đăng nhập, server tạo một session (phiên làm việc) và gửi lại một cookie để nhận diện user.
- Mỗi request sau đó sẽ gửi cookie thay vì username & password.
- Ví dụ: 
- - Bạn vào facebook.com, nhập username & password.
- - Server tạo session và gửi về cookie.
- - Mỗi lần bạn vào Facebook sau đó, trình duyệt tự gửi cookie.
- - Nếu session hết hạn hoặc bạn logout, cookie không còn hiệu lực.
2. Basic Auth
- Basic Auth là một cách xác thực đơn giản trong HTTP, trong đó username & password được mã hóa bằng Base64 và gửi kèm trong mỗi request.
- Không có cơ chế duy trì đăng nhập, mỗi request cần gửi lại thông tin xác thực.
