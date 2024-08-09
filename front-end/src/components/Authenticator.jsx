import { useEffect, useState } from 'react';
import '../csses/pc/Authenticator.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Authenticator(Props){

    const [name, setName] = useState("Faça o Login");
    const [isSignUp, setIsSignUp] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [email,setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        if(sessionStorage.getItem('elogieToken') != null){
            navigate('/elogieaqui')
        }

    },[])


    let check = (emaill) => {
        if(email.includes("@gmail.com") || email.includes("@hotmail.com")|| email.includes("@yahoo.com") || email.includes("@yahoo.com.br") || email.includes("@hotmail.com.br") || email.includes("@outlook.com")){
            return true;
        } else {
            return false;
        }
    }

    let handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(e.target)

        if(isSignUp){
            if(email != "" && senha != "" && nome != "" && confirmarSenha != "" && senha === confirmarSenha && email != " " && senha != " "){
                if(check(email)){
                    try{
                        const response = await axios.post('http://localhost:3000/users/register',{username:nome,email:email,password:senha})
                        if(response.status === 201){
                            let errorMe = document.getElementsByClassName('auth-error')[0];
                            errorMe.style.color = 'green';
                            setErrorMsg('Usuário cadastrado com sucesso!')
                        }
                    } catch (error){
                        console.error(error)
                        setErrorMsg(error.response.data.error)
                    }
                    
                } else if (!check(email)) {
                    setErrorMsg("E-mail inválido.")
                    setSenha("")
                    setConfirmarSenha("")
                }
            } else if(senha != confirmarSenha){
                setErrorMsg("Senhas diferentes.")
                setSenha("")
                setConfirmarSenha("")
            }
        } else{
            if(email != "" && senha != "" && email != " " && senha != " "){
                try{
                    const response = await axios.post('http://localhost:3000/users/login',{email:email,password:senha})
                    sessionStorage.setItem('elogieToken',response.data.token)
                    Props.setUUsername(response.data.user.username)
                    navigate('/elogieaqui')
                } catch (error){
                    console.log(error)
                    setErrorMsg(error.response.data.error)
                }
            }
        }

        
        
    }


    let handleSignUp = (e) =>{
        let img = document.getElementsByClassName('auth-image')[0];
        let wrapper = document.getElementsByClassName('auth-wrapper')[0];
        let titulo = document.getElementsByClassName('auth-title')[0];
        let confirm = document.getElementsByClassName('confirm')[0];
        let login = document.getElementsByClassName('auth-login')[0];
        let forgot = document.getElementsByClassName('auth-forgot')[0];
        let content = document.getElementsByClassName('auth-content')[0];
        let returnn = document.getElementsByClassName('auth-return')[0];
        let cadastro = document.getElementsByClassName('auth-register')[0];
        let nome = document.getElementsByClassName('auth-name')[0];
        let error = document.getElementsByClassName('auth-error')[0];

        if(isSignUp === false || e.target === cadastro){
            img.style.left = "100%";
            wrapper.style.left = "-100%";
            setName("Faça o Cadastro");
            confirm.style.display = "inline-block";
            login.style.display = "none";
            forgot.style.display = "none";
            content.style.gridTemplateRows = "100% 0%"
            returnn.style.display = "inline-block";
            cadastro.type = "submit";
            nome.style.display = "inline-block";
            setIsSignUp(true);

        }else if(isSignUp === true || e.target === returnn) {
            img.style.left = "";
            wrapper.style.left = "";
            setName("Faça o Login");
            confirm.style.display = "none";
            login.style.display = "inline-block";
            forgot.style.display = "inline-block";
            content.style.gridTemplateRows = "80% 30%";
            returnn.style.display = "none";
            setIsSignUp(false);
            nome.style.display = "none";
            error.style.display = "none";
            setNome("")
            setEmail("")
            setSenha("")
        } else if (isSignUp === true && e.target === cadastro){
            handleSubmit()
        }
        
    }

    return(
        <div className='global-div'>
            <button className='auth-return' onClick={handleSignUp}>X</button>
            <h4 className='auth-error'>{errorMsg}</h4>
            <div className="auth-div">
                <img className='auth-image' src='https://s4844.pcdn.co/wp-content/uploads/2018/01/bananaAD1main.png'/>
                <div className='auth-wrapper'>
                    <div className='auth-title'>
                        <h2 className='title'>{name}</h2>
                    </div>
                    <div className='auth-content'>
                        <form onSubmit={handleSubmit} className='auth-form'>
                            <div className='auth-inputs'>
                                <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Digite seu Nome' className='auth-name'></input>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Digite seu E-mail' className='auth-email'></input>
                                <input value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='Digite sua Senha' type='password' className='auth-password'></input>
                                <input value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} placeholder='Confirme sua Senha' type='password' className='auth-password confirm'></input>
                            </div>
                            <div className='auth-buttons'>
                                <button type='submit' className='auth-login'>Entrar</button>
                                <button type={isSignUp ? 'submit':''} onClick={handleSignUp} className='auth-register'>Cadastrar-se</button>
                            </div>
                        </form>
                    <button className='auth-forgot'></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authenticator;