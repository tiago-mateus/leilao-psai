import React, {useState} from "react";
import '../Login/styles.css';
import Input from '../components/mask-cpf';
import {Link} from 'react-router-dom';

const initialValues = {
    cpf: '',
    cnpj: ''
  };

export default function Login(){

    const [values, setValues] = useState(initialValues);

    function handleChange(event) {
        setValues({
        ...values,
        [event.target.name]: event.target.value
        });
    }

    return (
        <div className="login-container">
            <section className="formLogin">
 
                <div className="card-img">
                    <p className="title"><strong>Seja<br/><em>Bem-vindo</em></strong></p>
                    <p className="title-register">Ainda não tem conta? <br/><Link to="/register">Clique aqui!</Link></p>
                </div>

                <form>
                    <h1>LOGIN</h1>
                    <Input
                        name="cpf"
                        mask="999.999.999-99"
                        value={values.cpf}
                        onChange={handleChange}
                    />
                    <input placeholder="Senha" type="password"/>
                    <input type="submit" value="Entrar"/>
                </form>
            </section>

        </div>
    );
}