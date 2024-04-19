const sql = require('mssql');


async function getSuppliers(){
    try{
        const request = sql.Request();
        const result = await request.query('SELECT * FROM Suppliers');
        return result.recordset;
    }
    catch(err){
        throw err;
    }
}

async function getSupplierById(supplierId){
    try{
        const request = sql.Request();
        const result = await request.query(`SELECT * FROM Suppliers WHERE SupplierID = ${supplierId}; `);
        return result.recordset;
    }catch(err){
        throw err;
    }
}

async function createSupplier(supplierData){
    try{
        const request = sql.Request();
        let queryStatement = 
        `
            INSERT INTO [Suppliers]
                    ([CompanyName]
                    ,[ContactName]
                    ,[ContactTitle]
                    ,[Address]
                    ,[City]
                    ,[Region]
                    ,[PostalCode]
                    ,[Country]
                    ,[Phone]
                    ,[Fax]
                    ,[HomePage])
            VALUES
                    (
                    '${supplierData.CompanyName}'
                    ,'${supplierData.ContactName}'
                    ,'${supplierData.ContactTitle}'
                    ,'${supplierData.Address}'
                    ,'${supplierData.City}'
                    ,'${supplierData.Region}'
                    ,'${supplierData.PostalCode}'
                    ,'${supplierData.Country}'
                    ,'${supplierData.Phone}'
                    ,'${supplierData.Fax}'
                    ,'${supplierData.HomePage}')
        `;
        await request.query(queryStatement);
    }
    catch(err){
        throw err;
    }
}

async function updateSupplier(supplierData){
    try{
        const request = sql.Request();

        let queryStatement = 
        `
            UPDATE [Suppliers]
            SET [CompanyName]       = '${supplierData.CompanyName}'
                ,[ContactName]      = '${supplierData.ContactName}'
                ,[ContactTitle]     = '${supplierData.ContactTitle}'
                ,[Address]          = '${supplierData.Address}'
                ,[City]             = '${supplierData.City}'
                ,[Region]           = '${supplierData.Region}'
                ,[PostalCode]       = '${supplierData.PostalCode}'
                ,[Country]          = '${supplierData.Country}'
                ,[Phone]            = '${supplierData.Phone}'
                ,[Fax]              = '${supplierData.Fax}'
                ,[HomePage]         = '${supplierData.HomePage}'
            WHERE [SupplierID]      = ${supplierData.SupplierID}
        `;
        await request.query(queryStatement);
    }
    catch(err){
        throw err;
    }
}

async function deleteSupplier(supplierId){
    try{
        const request = sql.Request();
        await request.query(`DELETE FROM Suppliers WHERE [SupplierID] = ${supplierId}`);
    }
    catch(err){
        throw err;
    }
}


module.exports = {
    getSuppliers,
    getSupplierById,
    createSupplier,
    updateSupplier,
    deleteSupplier
};