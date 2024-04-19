const sql = require('mssql');
const DBConfig = require('../db/dbconfig');

const config = new DBConfig();

async function getProducts(){
    try{
        await sql.connect(config);
        const request = new sql.Request();
        const result = await request.query('SELECT * FROM Products ');
        return result.recordset;
    }
    catch(err){
        throw err;
    }
    finally{
        sql.close();
    }
}

async function getProductById(productId) {
    try{
        await sql.connect(config);
        const request = new sql.Request();
        const result = await request.query(`SELECT * FROM Products WHERE ProductID = ${productId}; `);
        return result.recordset;
    }
    catch(err){
        throw err;
    }
    finally{
        sql.close();
    }
}


async function createProduct(productData){
    try{
        await sql.connect(config);
        const request = new sql.Request();
        const queryStatement = 
        `
            INSERT INTO [Products]
                    ([ProductName]
                    ,[SupplierID]
                    ,[CategoryID]
                    ,[QuantityPerUnit]
                    ,[UnitPrice]
                    ,[UnitsInStock]
                    ,[UnitsOnOrder]
                    ,[ReorderLevel]
                    ,[Discontinued])
            VALUES
                    ('${productData.ProductName}'
                    ,${productData.SupplierID}
                    ,${productData.CategoryID}
                    ,${productData.QuantityPerUnit}
                    ,${productData.UnitPrice}
                    ,${productData.UnitsInStock}
                    ,${productData.UnitsOnOrder}
                    ,${productData.ReorderLevel}
                    ,${productData.Discontinued})
        `;
        await request.query(queryStatement);
    }
    catch(err){
        throw err;
    }
    finally{
        sql.close();
    }
}


async function updateProduct(productData){
    try{
        await sql.connect(config);
        const request = new sql.Request();
        const sqlStatement = `
        UPDATE [Products]
        SET [ProductName]       = '${productData.ProductName}'
           ,[SupplierID]        = ${productData.SupplierID}
           ,[CategoryID]        = ${productData.CategoryID}
           ,[QuantityPerUnit]   = ${productData.QuantityPerUnit}
           ,[UnitPrice]         = ${productData.UnitPrice}
           ,[UnitsInStock]      = ${productData.UnitsInStock}
           ,[UnitsOnOrder]      = ${productData.UnitsOnOrder}
           ,[ReorderLevel]      = ${productData.ReorderLevel}
           ,[Discontinued]      = ${productData.Discontinued}
        WHERE [ProductID]       = ${productData.ProductID}
        `;
        await request.query(sqlStatement);
    }catch(err){
        throw err;
    }
    finally{
        sql.close();
    }
}


async function deleteProduct(productId){
    try{
        await sql.connect(config);
        const request = new sql.Request();
        const sqlStatement = `DELETE FROM Products WHERE ProductID = ${productId} `;
        await request.query(sqlStatement);
    }
    catch(err){
        throw err;
    }
    finally{
        sql.close();
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}