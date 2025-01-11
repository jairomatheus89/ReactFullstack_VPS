import './FormLogin.css'

function FormLogin(){
    return(
        <form className="formzin">
            <h2>
                Nome de usuário
            </h2>
            <input className='inputbox' type="text" maxLength='30'/>
            <h2>
                Senha
            </h2>
            <input className='inputbox' type="password" maxLength='30'/>
        </form>
    );
}

export default FormLogin;