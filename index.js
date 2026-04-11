const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

const DATA_FILE = path.join(__dirname, 'data.json');

// 初始化数据文件
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

// 接收数据
app.post('/submit', (req, res) => {
  const newData = req.body;
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  data.push({
    ...newData,
    timestamp: new Date().toISOString()
  });
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.json({ success: true });
});

// 查看所有数据
app.get('/data', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  res.json(data);
});

// 导出 CSV
app.get('/export', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  if (data.length === 0) {
    return res.send('暂无数据');
  }
  
  const headers = ['美食', '家乡', '学校', '体重', '减肥状态', '星座', '时间'];
  const rows = data.map(item => [
    item.food, item.hometown, item.school, item.weight, item.diet, item.star, item.timestamp
  ]);
  
  let csv = headers.join(',') + '\n';
  rows.forEach(row => {
    csv += row.map(cell => `"${cell}"`).join(',') + '\n';
  });
  
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="decisions.csv"');
  res.send(csv);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`后端服务运行在 http://localhost:${PORT}`);
});
