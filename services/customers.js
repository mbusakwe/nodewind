const sql = require('mssql');
const DBConfig = require('../db/dbconfig');

const config = new DBConfig();

// Get all customers
async function getCustomers(){
    try{
        await sql.connect(config);
        const request = new sql.Request();
        const result = await request.query('SELECT * FROM Customers');
        return result.recordset;
    }
    catch(err){
        throw err;  // Let the API route handle this error
    }
    finally{
        sql.close();
    }
}

// Get a single customer
async function getCustomerById(customerId){
    try{
        await sql.connect(config);
        const request = new sql.Request();
        const result = await request.query(`SELECT * FROM Customers WHERE CustomerID = '${customerId}';`);
        return result.recordset;
    }
    catch(err){
        throw err;
    }
    finally{
        sql.close();
    }

}

async function createCustomer(customerData){
    try{
        await sql.connect(config);
        let query = 
        `
            INSERT INTO [Customers] 
                ([CustomerID]
                ,[CompanyName]
                ,[ContactName]
                ,[ContactTitle]
                ,[Address]
                ,[City]
                ,[Region]
                ,[PostalCode]
                ,[Country]
                ,[Phone]
                ,[Fax])
            VALUES
                ('${customerData.CustomerID}',
                '${customerData.CompanyName}',
                '${customerData.ContactName}',
                ${customerData.ContactTitle},
                ${customerData.Address},
                ${customerData.City},
                ${customerData.Region},
                ${customerData.PostalCode},
                ${customerData.Country},
                ${customerData.Phone},
                ${customerData.Fax});
        `;
        const request = new sql.Request();
        await request.query(query);
    }
    catch(err){
        throw err;
    }
    finally{
        sql.close();
    }
}

async function updateCustomer(customerData){
    try{
        await sql.connect(config);
        let query = 
        `
            UPDATE [Customers]
            SET [CustomerID] = '${customerData.CustomerID}'
                ,[CompanyName] = '${customerData.CompanyName}'
                ,[ContactName] = '${customerData.ContactName}'
                ,[ContactTitle] = '${customerData.ContactTitle}'
                ,[Address] = '${customerData.Address}'
                ,[City] = '${customerData.City}'
                ,[Region] = '${customerData.Region}'
                ,[PostalCode] = '${customerData.PostalCode}'
                ,[Country] = '${customerData.Country}'
                ,[Phone] = '${customerData.Phone}'
                ,[Fax] = '${customerData.Fax}'
            WHERE [CustomerID] = '${customerData.CustomerID}'
        `;
        const request = new sql.Request();
        await request.query(query);
    }
    catch(err){
        throw err;
    }
    finally{
        sql.close();
    }
}


async function deleteCustomer(customerId){
    try{
        await sql.connect(config);
        const request = new sql.Request();
        let query = `DELETE FROM Customers WHERE CustomerID = '${customerId}'`;
        await request.query(query);
    }
    catch(err){
        throw err;
    }
    finally{
        sql.close();
    }
}

module.exports = {
    getCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer,
};