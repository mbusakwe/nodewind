const express = require('express');

const customersService = require('./services/customers');
const productsService = require('./services/products');
const suppliersService = require('./services/suppliers');
const categoriesService = require('./services/categories');


const app = express();
const PORT = 3000;

// Middleware 
app.use(express.json());

// Connect to the database
// sql.connect(dbConfig).then(()=>{
//     console.log('Connected to SQL Server');
// }).catch(err => {
//     console.error('Error connecting to SQL Server:', err);
// });

app.get('/customers', async(req, res)=> {
    try{
        const customers = await customersService.getCustomers();
        res.json(customers);
    }
    catch(err){
        console.error('Error fetching customers', err);
        res.status(500).send('Error fetching customers');
    }
});

app.get('/products', async(req, res) =>{
    try{
        const products = await productsService.getProducts();
        res.json(products);
    }catch(err){
        console.error('Error fetching products', err);
        res.status(500).send('Error fetching products');
    }
});

app.get('/categories', async(req, res) =>{
    try{
        const categories = await categoriesService.getCategories();
        res.json(categories);
    }
    catch(err){
        console.error('Error fetching categories', err);
        res.status(500).send('Error fetching categories');
    }
});

app.get('/suppliers', async(req, res) =>{
    try{
        const suppliers = await suppliersService.getSuppliers();
        res.json(suppliers);
    }
    catch(err){
        console.error('Error fetching suppliers', err);
        res.status(500).send('Error fetching suppliers');
    }
});

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`);
});
