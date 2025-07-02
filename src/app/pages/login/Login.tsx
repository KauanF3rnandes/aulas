import { useEffect, useState } from "react"


export const Login = () => {

    // useState atualiza os valores de algum campo ou algo do tipo
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (window.confirm('Você é homen')) {
            console.log('Homen');
        }else{
            console.log('Mulher');
        }
    }, []);

    // useEffect faz o código que está nela executar apenas uma vez, ou se quiser no array de dependencias colocar parametros de quando atualizar
    useEffect(() => {
        console.log(email);
        console.log(password);
    }, [email, password]);

    const handleEntrar = () => {
        console.log(email);
        console.log(password);
    }

    return(
        <div>
            <form >

                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
                </label>

                <label>
                    <span>Senha</span>
                    <input value={password} onChange={s => setPassword(s.target.value)} type="password" />
                </label>

                <button onClick={handleEntrar} type="button">
                    Entrar
                </button>

            </form>
        </div>
    )
}