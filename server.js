import express from 'express'; // Importa o módulo Express para criar o servidor web.
import routes from './src/routes/postsRoutes.js';

// Cria uma instância do Express para iniciar o servidor.
const app = express();
app.use(express.static("uploads"))
routes(app);
// Permite que o servidor receba dados no formato JSON nas requisições.
app.use(express.json());

// Inicia o servidor na porta 3000 e exibe uma mensagem no console.
app.listen(3000, () => {
    console.log("Servidor escutando...");
});



