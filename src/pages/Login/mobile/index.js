import React, {useState} from "react";
import './styles.css';
import Input from '../../components/mask-cpf';
import {Link,useHistory} from 'react-router-dom';
import api from "../../../services/api";

const initialValues = {
    cpf: '',
    cnpj: ''
  };

export default function LoginMobile(){
    const history = useHistory();

    const [cpf, setCPF] = useState("");
    const [senha, setSenha] = useState("");
    const [values, setValues] = useState(initialValues);

    function handleChange(event) {
        setValues({
        ...values,
        [event.target.name]: event.target.value
        });

        setCPF(values.cpf);
    }

    async function handleLogin(e) {
        e.preventDefault();
        const data = {
            cpf,
            senha,
        }

        console.log(data);

        try{
            const response = await api.post('/sessions', data);
            localStorage.setItem('id', response.data.id);
            localStorage.setItem('cpf', cpf);

            history.push('/sale');

        }catch(err){
            alert("err");
        }
    }

    return (
    <div className="mobile-container">
    <section className="form">
{/* 
        <div className="card-img">
            <p className="title"><strong>Seja<br/><em>Bem-vindo</em></strong></p>
            <p className="title-register">Ainda não tem conta? <br/><Link to="/register">Clique aqui!</Link></p>
        </div> */}

        <form onSubmit={handleLogin}>
        <h1>LOGIN</h1>

            <Input
                name="cpf"
                mask="999.999.999-99"
                value={values.cpf}
                onChange={handleChange}
            />
            <input placeholder="Senha" type="password" value={senha} onChange={e => setSenha(e.target.value)}/>
            <input type="submit" value="Entrar"/>

            <p className="title-register">Ainda não tem conta? <br/><Link to="/register">Clique aqui!</Link></p>
        </form>
    </section>

</div>
        
    );
}
