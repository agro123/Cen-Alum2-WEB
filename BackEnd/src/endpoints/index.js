const { Router } = require('express');
const { getEmpleados, createEmpleado,
    getEmpleadoById, deleteEmpleado,
    updateEmpleado } = require('../controllers/empleadoController');
const { getClients, createClient, deleteClient, modifyClient } = require('../controllers/clientsController');
const router = Router();

//Empleados:
router.get('/empleado', getEmpleados);
router.get('/empleado/:id', getEmpleadoById)
router.post('/empleado', createEmpleado);
router.delete('/empleado/:id', deleteEmpleado);
router.put('/empleado/:id', updateEmpleado);

router.get('/client', getClients);
router.post('/client', createClient);
router.delete('/client/:id', deleteClient);
router.put('/client', modifyClient);

module.exports = router