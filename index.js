const app = require('./app'); // Importamos el modulo app
const { PORT } = require('./config/default.js'); // Importamos el puerto desde config/default.js

app.listen(PORT, () => { // Iniciamos el servidor
    console.log(`Server running on port ${PORT}`); // Mostramos un mensaje en la consola
});
