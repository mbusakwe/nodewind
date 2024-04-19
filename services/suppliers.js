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
        
    }catch(err){
        throw err;
    }
}


module.exports = {
    getSuppliers
};