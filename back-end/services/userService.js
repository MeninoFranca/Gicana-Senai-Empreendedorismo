const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const JWT_SECRET = 'MATHEUSÉLINDO'


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


        const token = jwt.sign(
            { userId: user.id, username: user.username },
            JWT_SECRET, 
            { expiresIn: 1800 } 
        );

        return { user, token }; 
    } catch (error) {
        throw new Error('Não foi possível realizar o login');
    }
};

module.exports = {
    newUser,
    loginUser,
}