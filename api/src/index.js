const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK',
    message: 'API is healthy',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/hello', (req, res) => {
  res.json({ 
    message: 'Hello from Node.js API!',
    server: require('os').hostname()
  });
});

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Nguyen Van A', email: 'a@example.com' },
    { id: 2, name: 'Tran Thi B', email: 'b@example.com' },
    { id: 3, name: 'Le Van C', email: 'c@example.com' }
  ];
  res.json({ 
    total: users.length,
    users: users 
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('API server listening on port ' + PORT);
});
