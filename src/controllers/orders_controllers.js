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

module.exports = controller;
