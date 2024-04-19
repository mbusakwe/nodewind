const sql = require('mssql');

async function getProducts(){
    try{
        const request = sql.Request();
        const result = await request.query('SELECT * FROM Products ');
        return result.recordset;
    }
    catch(err){
        throw err;
    }
}

async function getProductById(productId) {
    try{
        const request = sql.Request();
        const result = await request.query(`SELECT * FROM Products WHERE ProductID = ${productId}; `);
        return result.recordset;
    }
    catch(err){
        throw err;
    }
}

async function createProduct(productData){
    try{

    }catch(err){
        throw err;
    }
}