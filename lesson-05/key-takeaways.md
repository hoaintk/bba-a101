
# Key Takeaways - Postman Nâng Cao & API Docs

## 1. Biến trong Postman (Variable Scopes)

### Các loại biến:
| Loại biến               | Phạm vi sử dụng                           |
|-------------------------|--------------------------------------------|
| `Global`                | Dùng toàn bộ Postman                      |
| `Collection`            | Dùng trong 1 collection                   |
| `Environment`           | Gắn với từng môi trường (dev, prod,...)  |
| `Data`                  | Từ file CSV/JSON khi chạy Collection      |
| `Local`                 | Tạm thời trong 1 request/script           |

**Ưu tiên truy cập biến**: `Local > Data > Environment > Collection > Global`

---

## 2. Script trong Postman

### a. Pre-request Script (Chạy TRƯỚC khi gửi request)
Dùng để chuẩn bị data, token, timestamp,...

### Các đối tượng chính

- `pm.variables`: Quản lý biến (global, collection, environment).
- `pm.environment`: Thao tác với biến môi trường.
- `pm.collectionVariables`: Thao tác với biến collection.
- `pm.sendRequest`: Gửi request bổ sung (ví dụ: lấy token).

```js
const ts = new Date().toISOString();
pm.environment.set("timestamp", ts);
```

- Gửi request lấy token trước:
```js
pm.sendRequest({
  url: "https://api.example.com/auth",
  method: "POST",
  body: {
    mode: "raw",
    raw: JSON.stringify({ username: "admin", password: "123" })
  }
}, (err, res) => {
  if (!err) {
    const token = res.json().access_token;
    pm.environment.set("auth_token", token);
  }
});
```

---

### b. Post-request Script (Tests - Sau khi nhận response)

- Kiểm tra kết quả, lưu biến, hoặc xử lý logic tiếp theo.
- Có thể tạo báo cáo hoặc trực quan hóa.

### Các đối tượng chính
- `pm.response`: Truy cập dữ liệu response (status, JSON, text, v.v.).
- `pm.test`: Viết các bài kiểm tra (test assertions).
- `pm.expect`: Kiểm tra kỳ vọng (dùng với Chai.js).
- `pm.visualizer`: Hiển thị dữ liệu trực quan.

**Tests status code**:
```js
pm.test("Status is 200", () => {
  pm.response.to.have.status(200);
});
pm.environment.set("user_id", pm.response.json().id);
```

**Kiểm tra có trường email**:
```js
pm.test("Has email", () => {
  const res = pm.response.json();
  pm.expect(res).to.have.property("email");
});
```

---

## 3. Chaining Requests – Chuỗi request phụ thuộc nhau

Ví dụ: Tạo user → lấy ID → dùng ID gọi API khác

```js
const userId = pm.response.json().id;
pm.environment.set("user_id", userId);

pm.sendRequest({
  url: `https://api.example.com/users/${userId}`,
  method: "GET"
}, (err, res) => {
  console.log(res.json());
});
```

---

## 4. Trực quan hóa (Visualization)

Giúp hiển thị dữ liệu dễ đọc hơn bằng HTML + Chart.js

### a. Dạng bảng
```js
var template = `
<table>
  <tr><th>ID</th><th>Tên</th></tr>
  {{#each users}}
  <tr><td>{{id}}</td><td>{{name}}</td></tr>
  {{/each}}
</table>`;
pm.visualizer.set(template, { users: pm.response.json() });
```

### b. Dạng biểu đồ cột
```js
// Tính tổng theo trạng thái đơn hàng
const data = pm.response.json().reduce((acc, o) => {
  acc[o.status] = (acc[o.status] || 0) + o.total_amount;
  return acc;
}, {});

const labels = Object.keys(data);
const values = Object.values(data);

var template = `
<canvas id="chart"></canvas>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  new Chart(document.getElementById('chart'), {
    type: 'bar',
    data: {
      labels: ${JSON.stringify(labels)},
      datasets: [{
        label: 'Doanh thu theo trạng thái',
        data: ${JSON.stringify(values)}
      }]
    }
  });
</script>`;
pm.visualizer.set(template);
```

### c. Dạng biểu đồ tròn
```js
const countryCount = pm.response.json().reduce((acc, o) => {
  const country = o.customer.contact.country;
  acc[country] = (acc[country] || 0) + 1;
  return acc;
}, {});
```

---

## 5. Gửi nhiều request từ file (Collection Runner)

- Dùng CSV hoặc JSON để chạy nhiều lần với data khác nhau.

```csv
user_id,name
1,John
2,Jane
```

---

## 6. Body Data Types

| Loại Body                 | Khi nào dùng?                                |
|---------------------------|-----------------------------------------------|
| `form-data`               | Có upload file                                |
| `x-www-form-urlencoded`   | Gửi form đơn giản                             |
| `raw` (JSON, text...)     | Gửi JSON body là phổ biến nhất                |
| `binary`                  | Gửi file trực tiếp                            |
