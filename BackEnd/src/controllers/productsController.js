const pool = require('./bdconnect');

const getProducts = async (req,res) => {
    try{

        const response = await pool.query(`SELECT * FROM producto`);
        const productos = response.rows;
        return res.status(200).json(productos)

    }catch(e)
    {
        return res.status(500).json({message: "Ocurrió un error con el servidor"})
    }
}

module.exports = {
    getProducts
}