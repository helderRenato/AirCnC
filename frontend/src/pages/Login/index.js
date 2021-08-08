import React, {useState} from 'react';
import api from '../../services/api';

export default function Login({history}){
    const [email, setEmail] = useState('');
    async function handleSubmit(event){
        event.preventDefault();
        const response = await api.post('/sessions', { email });
        const {_id} = response.data;

        localStorage.setItem('user', _id);

        history.push('/dashboard');
    }

    return (
        <>
            <p>Ofereça <strong>spots</strong> para programadores e <strong>talentos</strong> para a sua empresa</p>

            <form onSubmit = {handleSubmit}>

            <label htmlFor = "email">EMAIL *</label>

            <input id = "email" type="email" value = {email} 
                onChange = {event => setEmail(event.target.value)} placeholder="Digite seu email"></input>

            <button type="submit" className="btn">Entrar</button>

            </form>
        </>
    );
}