import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm(){
    const [username, setUserName] = useState('');
    const [password, setPassword]= useState('');

    function handleSubmit(event){
        event.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then(response => {
            return response.json()
        }).then( json => {
            console.log(json);
        })
    }

    return(
        <section>
            <h1>Login</h1>
            <form action='' onSubmit={handleSubmit}>
                <input type="text" name="Nome" value={username} onChange={({target}) => { setUserName(target.value)}} />
                <input type="password" name="Password" value={password} onChange={({target}) => { setPassword(target.value)}} />
                <button >Entrar</button>
            </form>
            <Link to="/login/criar">Cadastro</Link>
        </section>
    )
}