import express from "express";
import multer from "multer";
import { atualizarNovoPost, imagemUpload, listarTodosOsPosts, postarNovoPost } from "../controllers/postsControllers.js";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads", storage})

const routes = (app) => {
    // Permite que o servidor receba dados no formato JSON nas requisições.
    app.use(express.json());
    app.use(cors(corsOptions));
    // Rota GET para a URL '/posts'. Quando essa rota é acessada, a função é executada.
    app.get("/posts", listarTodosOsPosts);
    app.post("/posts", postarNovoPost)
    app.post("/upload", upload.single("imagem"), imagemUpload);
    app.put("/upload/:id", atualizarNovoPost);

}

export default routes;
