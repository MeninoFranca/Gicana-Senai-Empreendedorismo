const Idea = require ('../models/idea');

const createIdea = async (data) => {
    try {
      const newIdea = await Idea.create(data);
      return newIdea;
    } catch (error) {
      throw new Error(`Erro ao criar uma nova ideia: ${error.message}`);
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

const getIdeaById = async (id) => {
    try {
        const idea = await Idea.findByPk(id);
        if (!idea) {
            throw new Error('Ideia não encontrada');
        }
        return idea;
    } catch (error) {
        throw new Error(`Erro ao buscar a ideia: ${error.message}`);
    }
};

const updateIdea = async (id, data, userId) => {
    try {
        const idea = await getIdeaById(id);
        if (idea.user_id !== userId) { 
            throw new Error('Você não tem permissão para editar esta ideia');
        }
        await idea.update(data);
        return idea;
    } catch (error) {
        throw new Error(`Erro ao atualizar a ideia: ${error.message}`);
    }
};

const deleteIdea = async (id, userId) => {
    try {
        const idea = await getIdeaById(id);
        if (idea.user_id !== userId) { 
            throw new Error('Você não tem permissão para apagar esta ideia');
        }
        await idea.destroy();
        return { message: 'Ideia apagada com sucesso' };
    } catch (error) {
        throw new Error(`Erro ao apagar a ideia: ${error.message}`);
    }
};

module.exports = {
    createIdea,
    listIdeas,
    updateIdea,
    deleteIdea,
};