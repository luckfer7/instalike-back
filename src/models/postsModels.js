import { ObjectId } from 'mongodb';
import conectarAoBanco from '../config/dbConfig.js'; // Importa a função para conectar ao banco de dados, definida em dbConfig.js.

// Conecta ao banco de dados usando a string de conexão fornecida como variável de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts de uma coleção específica no banco de dados.
export async function getTodosOsPosts() {
    // Obtém o banco de dados 'instabyte' da conexão.
    const db = conexao.db("instabyte");
    // Obtém a coleção 'posts' do banco de dados.
    const colecao = db.collection("posts");
    // Executa uma consulta para encontrar todos os documentos da coleção e retorna um array com os resultados.
    return colecao.find().toArray();
}

export async function criarPost(novoPost){
    const db = conexao.db("instabyte");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost){
    const db = conexao.db("instabyte");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}