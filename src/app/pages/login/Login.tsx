import { useCallback, useEffect, useMemo, useState } from "react"


export const Login = () => {

    // useState atualiza os valores de algum campo ou algo do tipo
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    // useMemo ele grava na memória os valores de uma aplicação dentro de uma const ele precisa de 2 parametro 1 - recebe uma função 
    // 2- array de dependencias colocar parametros de quando atualizar
    const emailLength = useMemo(() => {
        console.log('Executou');
        return email.length * 1000;
    }, [email.length]);


    /* useEffect faz o código que está nela executar apenas uma vez, ou se quiser no array de dependencias colocar parametros de quando atualizar
    useEffect(() => {
        if (window.confirm('Você é homen')) {
            console.log('Homen');
        }else{
            console.log('Mulher');
        }
    }, []);
    */

    useEffect(() => {
        console.log(email);
        console.log(password);
    }, [email, password]);
    
    // useCallback ele guarda o valor em memória e pede  2 parametro 1 - recebe uma função // 2- array de dependencias colocar parametros de quando atualizar
    // tem a lógica parecida com os outros Hooks acima.
    const handleEntrar = useCallback(() => {
        console.log(email);
        console.log(password);
    }, [email, password]);

    return(
        <div>
            <form >
                <p>Quantidade de catacteres no email: {emailLength}</p>
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