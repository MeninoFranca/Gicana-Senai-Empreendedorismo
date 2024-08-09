const bcrypt = require('bcrypt')
const User = require('../models/User');


const newUser = async (userData) => {

    try{
        const hashedPassowrd = await bcrypt.hash(userData.password,10);
        const newUser = await User.create(
            {
                username: userData.username,
                email: userData.email,
                password: hashedPassowrd
            });
            return newUser;
    } catch (error) {
        throw new Error('Não foi possível criar a sua conta')
    }
};

const loginUser = async(email,password) => {

    try{
        const user = await User.findOne({ where: { email } }); 
        if (!user) {
            throw new Error('Usúario ou senha incorretos');
        }
    

    const isPassworValid = await bcrypt.compare(password, user.password);
        if (!isPassworValid) {
            throw new Error('Usuário ou senha incorretos');
        }
        return User;
        console.log(User);
} catch (error) {
    throw new Error('Não foi possível realizar o login');
}
}

module.exports = {
    newUser,
    loginUser,
}