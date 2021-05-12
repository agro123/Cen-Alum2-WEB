const pool = require('./bdconnect');

const getEmpleados = async (req, res) => {
  try {
    const response = await pool.query(`SELECT * FROM empleado `);
    const empleados = await response.rows;
    res.json(empleados);
  } catch (e) {
    res.json({ message: "FAILED" });
    console.log("----Ocurrio  un error----", e);
  }
}
const getEmpleadoById = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(
      `SELECT * FROM empleado WHERE cedula_empleado = $1 `,
      [id]
    );
    if (response.rowCount >= 1) {
      const empleado = await response.rows;
      res.json(empleado);
    } else {
      res.status(404).json({ message: "NOT EXIST" });
    }

  } catch (e) {
    res.json({ message: "FAILED" });
    console.log("----Ocurrio  un error----", e);
  }
}

const createEmpleado = async (req, res) => {
  try {
    const { nombre, cedula, email, direccion, telefono } = req.body;

    await pool.query(
      `INSERT INTO empleado 
      (cedula_empleado,email_empleado,direccion_empleado,telefono_empleado, nombre_empleado) 
      VALUES
      ($1, $2, $3, $4, $5)`,
      [cedula, email, direccion, telefono, nombre]
    );

    res.json({ message: "SUCCESS" });

  } catch (e) {
    console.log("----Ocurrio  un error----", e);
    res.json({ message: "FAILED" });
  }
}
const deleteEmpleado = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(
      `DELETE FROM empleado WHERE cedula_empleado = $1 `,
      [id]
    );
    if (response.rowCount >= 1) {
      res.json({ message: "DELETED" });
    } else {
      res.status(404).json({ message: "NOT EXIST" });
    }
  } catch (e) {
    res.json({ message: "FAILED" });
    console.log("----Ocurrio  un error----", e);
  }
}

const updateEmpleado = async (req, res) => {
  try {
    const id = req.params.id;
    const { nombre, cedula, email, direccion, telefono } = req.body;
    const response = await pool.query(
      `UPDATE empleado 
    SET nombre_empleado = $1, 
    cedula_empleado = $2,
    email_empleado = $3,
    direccion_empleado = $4,
    telefono_empleado = $5
    WHERE cedula_empleado = $6`,
      [nombre, cedula, email, direccion, telefono, id]
    )
    if(response.rowCount>=1){
      res.json({message: 'SUCCESS'})
    }else {
      res.status(404).json({message: 'NOT EXIST'})
    }
  } catch (e) {
    console.log(e)
  }
}


module.exports = {
  getEmpleados,
  createEmpleado,
  getEmpleadoById,
  deleteEmpleado,
  updateEmpleado
}