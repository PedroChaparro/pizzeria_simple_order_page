const controller = {};

//Controlador de la ruta get('/')
controller.home = (req, res) => {
    req.getConnection((err, conn) => {
        //Cuando obtenga la conección, se hace el query
        conn.query('SELECT * FROM orders', (err, rows) => {
            //Cuando obtenga las rows, las manda al index
            res.render('index', {
                data: rows, //Le manda como información las rows obtenidas en la query
            });
        });
    });
};

//Controlador de la ruta post('/add');
controller.add = (req, res) => {
    const order_data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO orders SET ?', [order_data], (err, order) => {
            //Cuando inserta el dato lo redirecciona a la página inicial
            res.redirect('/');
        });
    });
};

//Controlador de la ruta para obtener los datos de una ruta y cambiarlos
controller.change = (req, res) => {
    const { id } = req.params;

    //Se hace la consulta para obtener los datos a cambiar
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM orders WHERE id = ?', id, (err, order) => {
            res.render('change', {
                data: order[0], //Se le pasa la posición 0 ya que la query retorna una lista
            });
        });
    });
};

controller.update = (req, res) => {

    const { id } = req.params; 
    const new_data = req.body; 

    //Se hace el query para actualizar los datos en la BD
    req.getConnection((err, conn) => {

        conn.query('UPDATE orders SET ? WHERE id = ?', [new_data, id], (err, row) => {
            res.redirect('/'); //Cuando actualice lo redirecciona a la ruta raíz
        }); 

    }); 

};

module.exports = controller;
