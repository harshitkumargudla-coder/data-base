use('ecommerce');
db.products.updateMany(
    {category: 'Electronics'},
    {$set: {stock: 80}}
);
