//index, show, destroy, store
//mostrar sessões, mostrar uma unica sessão, destruir uma sessão, criar uma sessão
const User = require('../models/User');
//Criar sessão
module.exports = {
    async store(req, res){
        //buscar o email do usuário 
        const { email } = req.body;

        //alocar o email na base de dados
        let user = await User.findOne({email});
        if(!user){
            user = await User.create( { email } );
        }

        
        return res.json(user);
    }
};