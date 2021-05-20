import React, {useState} from "react";
import './styles.css';
import Input from '../components/mask-cpf';
import {Link} from 'react-router-dom';
import {FiArrowDownLeft} from 'react-icons/fi';
const initialValues = {
    cpf: '',
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
            <section className="form">
 
                <div className="card-img">
                    <p className="title"><strong>Cadastro</strong></p>
                    <p className="title-register" style={{fontStyle: 'normal'}}><Link to="/"><strong><FiArrowDownLeft size={30} color="#981E1E"/></strong>Voltar para <br/> o Login</Link></p>
                </div>

                <form>
                    <input className="nomecompleto" placeholder="Nome Completo" type="text"/>

                    <div className="formApelidoCPF">
                    <input className="apelido" placeholder="Apelido" type="text" />
                        
                    <Input
                        name="cpf"
                        mask="999.999.999-99"
                        value={values.cpf}
                        onChange={handleChange}
                    />
                    </div>
                    <input className="endereco" placeholder="Endereço" type="text" />

                    <div className="formCidadeBairro">
                        <input placeholder="Cidade" type="text"/>
                        <input placeholder="Bairro" type="text"/>
                    </div>
                    <div className="formTelefone">
                        <input placeholder="Telefone 1" type="text"/>
                        <input placeholder="Telefone 2" type="text"/>
                    </div>
                    <div className="formSenha">
                        <input placeholder="Senha" type="password"/>
                        <input placeholder="Confirmar senha" type="password"/>
                    </div>
                    <input type="submit" value="Cadastrar"/>
                </form>
            </section>

        </div>
    );
}