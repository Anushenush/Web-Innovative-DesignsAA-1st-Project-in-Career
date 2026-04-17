const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.redirect('http://127.0.0.1:5501/web/page3.html');
});

app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
});