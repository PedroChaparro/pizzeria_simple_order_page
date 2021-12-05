const controller = {};

controller.home = (req, res) => {
    //Controlador de la ruta get('/')

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

module.exports = controller;
