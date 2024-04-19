const express = require('express');
const sql = require('mssql');
const dbConfig = require('./db/dbconfig.js');

const app = express();
const PORT = 3000;

// Middleware 
app.use(express.json());

// Connect to the database
sql.connect(dbConfig).then(()=>{
    console.log('Connected to SQL Server');
}).catch(err => {
    console.error('Error connecting to SQL Server:', err);
});

app.get('/products', async(req, res) =>{
    try{
        const request = new sql.Request();
        const result = await request.query('SELECT * FROM Products');
        res.json(result);
    }catch(err){
        console.error('Error fetching products', err);
        res.status(500).send('Error fetching products');
    }
});

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`);
});
