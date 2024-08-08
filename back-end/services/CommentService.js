const Comment = require('../models/Comment')

const addComment = async (data) => {

    try {
        const newComment = await Comment.create(data);
        return newComment;
    } catch (error) {
        throw new Error('Ocorreu um erro ao comentar na postagem')
    }
};

module.exports = {
    addComment,
};