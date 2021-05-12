const { Router } = require('express');
const { getEmpleados, createEmpleado} = require ('../controllers/empleadoController');

const router = Router();

//Empleados:
router.get('/empleado', getEmpleados);
router.post('/empleado', createEmpleado);

module.exports = router