const pool = require('./bdconnect');

const getEmpleados = async (req, res) => {
  try {
    const response = await pool.query(`SELECT * FROM empleado `);
    const empleados = await response.rows;
    res.json(empleados);
  } catch (e) {
    console.log("----Ocurrio  un error----", e);
  }
}
const createEmpleado = async (req, res) => {
  try {
    const { nombre, cedula, email, direccion, telefono } = req.body;

    const response = await pool.query(
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

module.exports = {
  getEmpleados,
  createEmpleado
}