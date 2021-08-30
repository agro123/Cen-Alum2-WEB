const { Router } = require('express');
const { getEmpleados, createEmpleado,
    getEmpleadoById, deleteEmpleado,
    updateEmpleado } = require('../controllers/empleadoController');
const { getClients, createClient, deleteClient } = require('../controllers/clientsController');
const { getProducts, createProduct, modifyProduct,
    deleteProduct } = require('../controllers/productsController');
const router = Router();

//Empleados:
router.get('/empleado', getEmpleados);
router.get('/empleado/:id', getEmpleadoById)
router.post('/empleado', createEmpleado);
router.delete('/empleado/:id', deleteEmpleado);
router.put('/empleado/:id', updateEmpleado);
//Clientes
router.get('/client', getClients);
router.post('/client', createClient);
router.delete('/client/:id', deleteClient);
//Productos
router.get('/product', getProducts);
router.post('/product', createProduct);
router.put('/product/:id', modifyProduct);
router.delete('/product', deleteProduct);

module.exports = router