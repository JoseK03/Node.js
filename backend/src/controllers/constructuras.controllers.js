import getConnection from "../db/database.js";
const getConstructora = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM constructoras");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methodHTTP = {
    getConstructora
}