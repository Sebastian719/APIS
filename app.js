const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mi_base_de_datos',
});

db.connect(err => {
  if (err) {
    console.error('Error de conexión a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});

// Configura las rutas de tu API REST
app.get('/api/clientes', (req, res) => {
  // Aquí debes escribir el código para obtener la lista de clientes desde la base de datos
  db.query('SELECT * FROM clientes', (err, results) => {
    if (err) {
      console.error('Error al obtener clientes: ' + err.message);
      res.status(500).json({ error: 'Error al obtener clientes' });
      return;
    }
    res.json(results);
  });
});

app.use(express.static('public')); // Sirve recursos estáticos

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
