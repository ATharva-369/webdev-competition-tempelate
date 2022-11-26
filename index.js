const express = require('express');
const app = express();
const port = 5000;
app.use(express.static('public'));
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_ENV)


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/home.html');
});
app.get('/login', (req, res) => {
	res.sendFile(__dirname + '/public/login.html');
});
app.get('/product', (req, res) => {
	res.sendFile(__dirname + '/public/product.html');
});
app.get('/cart', (req, res) => {
	res.sendFile(__dirname + '/public/cart.html');
});
app.post('/create-checkout-session',  async (req, res) => {
    try{
        const session = await stripe.checkout.sessions.create({
            payment_method_types : ['card'],
            mode : 'payment',
            line_items : req.body.items.map(item=>{
                const storeItem = storeItems.get(item.id);
                return {
                    price_data : {
                        currency : 'inr',
                        product_data:{
                            name : storeItem.name
                        },
                        unit_amount : storeItem.priceInPaisa
                    },
                    quantity : item.quantity
                    }
            }),
            success_url : `${process.env.SERVER_URL}/success.html`,
            cancel_url : `${process.env.SERVER_URL}/cancel.html`
        })
        res.json({url : session.url})
    } 
    catch(e){
       res.status(500).json({error : e.message}) 
    }
})

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});
