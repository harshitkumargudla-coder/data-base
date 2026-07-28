use('ecommerce');
db.order.deleteMany({status: 'Delivered'});  
db.products.deleteMany({
    price: {$lt: 20}
});
