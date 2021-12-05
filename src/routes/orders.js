const express = require('express');
const router = express.Router();

const controller = require('../controllers/orders_controllers');

router.get('/', controller.home); //Ruta home que muestra la lista de ordenes y el formulario para agregar una nueva orden
router.post('/add', controller.add); //Ruta add que se activa cuadno se da click en el botón de "ADD ORDER"

//Editar y guardar cambios en la orden
router.get('/change/:id', controller.change); //Ruta para modificar los datos de una orden
router.post('/update/:id', controller.update);  //Ruta para guardar los cambios aplicados a una orden

router.get('/delete/:id', controller.remove); 

module.exports = router;
