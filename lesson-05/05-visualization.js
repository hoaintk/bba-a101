//Table 
const orders = pm.response.json();

orders.forEach(order => {
    order.totalItems = order.items.length;
    order.totalAmount = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

const template = `
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #121212;
            color: #e0e0e0;
            padding: 20px;
        }
        h2 {
            color: #4da6ff;
            margin-bottom: 16px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 12px;
        }
        th, td {
            padding: 10px;
            border: 1px solid #333;
        }
        th {
            background-color: #1e1e1e;
            color: #4da6ff;
        }
        tr:nth-child(even) {
            background-color: #1a1a1a;
        }
        tr:hover {
            background-color: #2a2a2a;
        }
    </style>

    <h2>BẢNG ĐƠN HÀNG</h2>
    <table>
        <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Total Items</th>
            <th>Total Amount ($)</th>
        </tr>
        {{#each orders}}
        <tr>
            <td>{{order_id}}</td>
            <td>{{customer.name}}</td>
            <td>{{totalItems}}</td>
            <td>{{totalAmount}}</td>
        </tr>
        {{/each}}
    </table>
`;

pm.visualizer.set(template, { orders });

//Column chart
const responseData = pm.response.json();

const statusSummary = responseData.reduce((acc, order) => {
    const status = order.status;
    const amount = order.total_amount;
    acc[status] = (acc[status] || 0) + amount;
    return acc;
}, {});

const labels = Object.keys(statusSummary);
const data = Object.values(statusSummary);

const template = `
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  </head>
  <body>
    <canvas id="myChart"></canvas>
    <script>
      const ctx = document.getElementById('myChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ${JSON.stringify(labels)},
          datasets: [{
            label: 'Tổng doanh thu theo từng trạng thái',
            data: ${JSON.stringify(data)},
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Tổng số lượng theo từng trạng thái'
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Doanh thu'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Trạng thái'
              }
            }
          }
        }
      });
    </script>
  </body>
</html>
`;

pm.visualizer.set(template);

// Pie chart
const responseData = pm.response.json();

const countryCount = responseData.reduce((acc, order) => {
    const country = order.customer?.contact?.country || 'Unknown';
    acc[country] = (acc[country] || 0) + 1;
    return acc;
}, {});

const labels = Object.keys(countryCount);
const data = Object.values(countryCount);

const template = `
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  </head>
  <body>
    <canvas id="myChart"></canvas>
    <script>
      const ctx = document.getElementById('myChart').getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ${JSON.stringify(labels)},
          datasets: [{
            label: 'Số lượng đơn hàng theo quốc gia',
            data: ${JSON.stringify(data)},
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Phân bố đơn hàng theo quốc gia'
            }
          }
        }
      });
    </script>
  </body>
</html>
`;

pm.visualizer.set(template);
