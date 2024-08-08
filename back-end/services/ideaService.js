const Idea = require ('../models/idea');

const createIdea = async (data) => {
    try {
        const newIdea = await Idea.create(data);
        return newIdea;
    } catch (error) {
        throw new Error(`Erro ao criar um novo post: ${error.message}`); // Mensagem de erro detalhada
    }
};

const listIdeas = async () => {
    try {
        const ideas = await Idea.findAll(); // Certifique-se de usar o mesmo nome do modelo
        return ideas;
    } catch (error) {
        throw new Error(`Não foi possível listar seus posts: ${error.message}`); // Mensagem de erro detalhada
    }
}

module.exports = {
    createIdea,
    listIdeas,    
};