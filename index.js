const express = require('express');
const app = express();
const port = 5000;
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/home.html');
});
app.get('/login', (req, res) => {
	res.sendFile(__dirname + '/public/login.html');
});
app.get('/product:id', (req, res) => {
	res.sendFile(__dirname + '/public/product.html');
});
app.get('/cart', (req, res) => {
	res.sendFile(__dirname + '/public/cart.html');
});

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});
