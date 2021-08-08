import React , {useState, useMemo} from 'react';
import camera from '../../assets/camera.svg';
import './styles.css';
import api from '../../services/api';
export default function New({history}){
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
    const [thumbnail, setThumbnail] = useState(null);

    const preview = useMemo( () => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail]);


    async function handleSubmit(event){
        event.preventDefault();

        const data = new FormData();
        const user_id  = localStorage.getItem('user'); 
        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        await api.post('/spots', data, {
            headers : {user_id}
        });

        history.push('/dashboard');
    }

    return(
        <>
            <label 
                id = "thumbnail" 
                style = {{backgroundImage: `url(${preview})`}}
                className = {thumbnail ? 'has-thumbnail':''} 
            >
                <input type = "file" onChange = {event => setThumbnail(event.target.files[0])}></input>
                <img src = {camera} alt ="Select img"></img>
            </label>
            <form onSubmit = {handleSubmit}>
                <label htmlFor = "company">EMPRESA *</label>
                <input
                    id = "company"
                    placeholder="Sua empresa íncrivel"
                    value = {company}
                    onChange = {event => setCompany(event.target.value)}
                ></input>
                <label ></label>

                <label htmlFor = "techs">TECNOLOGIAS * <span>( separadas por vírgula )</span></label>
                <input
                    id = "techs"
                    placeholder = "Quais tecnologias usam?"
                    value = {techs}
                    onChange = { event => setTechs(event.target.value)}
                ></input>

                <label htmlFor = "price">Valor da diária * <span>( em branco para GRATUITO )</span></label>
                <input
                    id = "price"
                    placeholder = "Valor cobrado pro dia"
                    value = {price}
                    onChange = { event => setPrice(event.target.value)}
                ></input>

                <button type = "submit" className = "btn">Cadastrar</button>
            </form>
        </>
    );
}