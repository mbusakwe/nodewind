const sql = require('mssql');
const DBConfig = require('../db/dbconfig');

const config = new DBConfig();

async function getCategories(){
    try{
        await sql.connect(config);
        const request = new sql.Request();
        const result = await request.query('SELECT * FROM [Categories] ');
        return result.recordset;
    }
    catch(err){
        throw err;
    }
    finally{
        sql.close();
    }
}

async function getCategoryById(categoryId){
    try{
        await sql.connect(config);
        const request = new sql.Request();
        const result = await request.query(`SELECT * FROM Categories WHERE CategoryID = ${categoryId}`);
        return result.recordset;
    }
    catch(err){
        throw err;
    }
    finally{
        sql.close();
    }
}


async function createCategory(categoryData){
    try{
        await sql.connect(config);
        const request = new sql.Request();
        const sqlQuery = 
        `
            INSERT INTO [Categories]
                    ([CategoryName]
                    ,[Description]
                    ,[Picture])
            VALUES
                    (
                    '${categoryData.CategoryName}'
                    ,'${categoryData.Description}'
                    ,${categoryData.Picture})
        `;
        await request.query(sqlQuery);

    }
    catch(err){
        throw err;
    }
    finally{
        sql.close();
    }
}

async function updateCategory(categoryData){
    try{
        await sql.connect(config);
        const request = new sql.Request();
        const sqlQuery = 
        `
            UPDATE [Categories]
            SET [CategoryName] = '${categoryData.CategoryName}'
            ,[Description] = '${categoryData.Description}'
            ,[Picture] = ${categoryData.Picture}
            WHERE [CategoryID] = ${categoryData.CategoryID}
        `;
        await request.query(sqlQuery);
    }
    catch(err){
        throw err;
    }
    finally{
        sql.close();
    }
}

async function deleteCategory(categoryId){
    try{
        await sql.connect(config);
        const request = new sql.Request();
        const sqlQuery = 
        `
            DELETE FROM  [Categories] WHERE [CategoryID] = ${categoryId}
        `;
        await request.query(sqlQuery);
    }
    catch(err){
        throw err;
    }
    finally{
        sql.close();
    }
}

module.exports = {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}