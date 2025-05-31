// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Chuyển hướng tất cả yêu cầu gốc về trang OrangeHRM local
app.get('/', (req, res) => {
  res.redirect('http://localhost/web/index.php/pim/viewEmployeeList');
});

// Có thể mở rộng để test các trang khác (VD: login, dashboard) 123
app.get('/login', (req, res) => {
  res.redirect('http://localhost/web/index.php/auth/login');
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Redirect server is running at http://localhost:${PORT}`);
});