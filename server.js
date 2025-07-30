const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('AFK Bot is running!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Web server is running on port ${PORT}`);
});
