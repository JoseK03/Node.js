fom getCategorias from "./../db/database.js"
const getCategorias =  (req,res) => {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM categorias")
}

export const methodHTTP = {
    getCategorias
}