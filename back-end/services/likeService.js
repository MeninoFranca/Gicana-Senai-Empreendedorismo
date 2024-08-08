const Like = require('../models/Like')

const addLike = async (data) => {
    try{
        const newLike = await Like.create(data);
        return newLike
    } catch (erro) {
        throw new Error ('Ocorreu um erro ao tentar curtir a postagem')
    }
};

module.exports = {
    addLike,
};