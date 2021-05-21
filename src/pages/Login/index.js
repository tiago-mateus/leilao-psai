import React, {useState} from "react";
import '../Login/styles.css';
import Input from '../components/mask-cpf';
import {Link, useHistory} from 'react-router-dom';
import api from "../../services/api";
import LoginMobile from './LoginMobile';

const initialValues = {
    cpf: '',
    cnpj: ''
  };

export default function Login(){
    const width = window.innerWidth;
    // The width below which the mobile view should be rendered
    const breakpoint = 620;

    console.log(width);
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

    return width < breakpoint ? <LoginMobile/> : ( 
        <div className="login-container">
            <section className="formLogin">
 
                <div className="card-img">
                    <p className="title"><strong>Seja<br/><em>Bem-vindo</em></strong></p>
                    <p className="title-register">Ainda não tem conta? <br/><Link to="/register">Clique aqui!</Link></p>
                </div>

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
                </form>
            </section>

        </div>
    );
}