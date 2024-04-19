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
        const request = sql.Request();
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
}


async function updateProduct(productData){
    try{
        const request = sql.Request();
        const sqlStatement = `
        UPDATE [Products]
        SET [ProductName] = '${productData.ProductName}'
           ,[SupplierID] = ${productData.SupplierID}
           ,[CategoryID] = ${productData.CategoryID}
           ,[QuantityPerUnit] = ${productData.QuantityPerUnit}
           ,[UnitPrice] = ${productData.UnitPrice}
           ,[UnitsInStock] = ${productData.UnitsInStock}
           ,[UnitsOnOrder] = ${productData.UnitsOnOrder}
           ,[ReorderLevel] = ${productData.ReorderLevel}
           ,[Discontinued] = ${productData.Discontinued}
        WHERE [ProductID] = ${productData.ProductID}
        `;
        await request.query(sqlStatement);
    }catch(err){
        throw err;
    }
}


async function deleteProduct(productId){
    try{
        const request = sql.Request();
        const sqlStatement = `DELETE FROM Products WHERE ProductID = ${productId} `;
        await request.query(sqlStatement);
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}