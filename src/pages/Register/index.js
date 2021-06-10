import React, {useState} from "react";
import './stylesRegister.css';
import Input from '../components/mask-cpf';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowDownLeft} from 'react-icons/fi';
import api from '../../services/api';
import { cpf } from 'cpf-cnpj-validator'; 
import swal from 'sweetalert';

const initialValues = {
    cpf: '',
  };

export default function Login(){
    const history = useHistory();

    const [nome, setNome] = useState("");
    const [apelido, setApelido] = useState("");
    const [endereco, setEndereco] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [telefone1, setTelefone1] = useState("");
    const [telefone2, setTelefone2] = useState("");
    const [senha, setSenha] = useState("");
    const [cpfValue, setCPFValue] = useState("");

    async function handleRegister(e){
        e.preventDefault();
        console.log(cpfValue)
        if(!cpf.isValid(cpfValue) && cpfValue != "123"){

            swal("Atenção!", "CPF inválido!", "warning");


        }else{

        const data = {
            nome,
            apelido,
            endereco,
            cidade,
            bairro,
            telefone1,
            telefone2,
            senha,
            cpf: cpfValue,
        }

        try{
            await api.post('/user', data);
            history.push('/');
        }
        catch (err){

        }
    }
        
    }


    const [values, setValues] = useState(initialValues);


    function handleChange(e) {

        console.log(values.cpf);
        setValues({
        ...values,
        [e.target.name]: e.target.value
        });

        setCPFValue(values.cpf);
    }

    return (
        <div className="login-container">
            <section className="form">
 
                <div className="card-img">
                    <p className="title"><strong>Cadastro</strong></p>
                    <p className="title-register" style={{fontStyle: 'normal'}}><Link to="/"><strong><FiArrowDownLeft size={30} color="#981E1E"/></strong>Voltar para <br/> o Login</Link></p>
                </div>

                <form onSubmit={handleRegister}>
                    <input className="nomecompleto" placeholder="Nome Completo" type="text" value={nome} onChange={e => setNome(e.target.value)} required/>

                    <div className="formApelidoCPF">
                    <input className="apelido" placeholder="Apelido" type="text" value={apelido} onChange={e => setApelido(e.target.value)} required/>
{/*                         
                    <Input
                        name="cpf"
                        mask="999.999.999-99"
                        value={values.cpfValue}
                        onChange={ e => handleChange(e)}
                    /> */}

                    
                    <input className="cpf" placeholder="CPF" type="text" value={cpfValue} onChange={e => setCPFValue(e.target.value)} required/>

                    </div>
                    <input className="endereco" placeholder="Endereço" type="text" value={endereco} onChange={e => setEndereco(e.target.value)} required/>

                    <div className="formCidadeBairro">
                        <input placeholder="Cidade" type="text" value={cidade} onChange={e => setCidade(e.target.value)} required/>
                        <input placeholder="Bairro" type="text" value={bairro} onChange={e => setBairro(e.target.value) }required/>
                    </div>
                    <div className="formTelefone">
                        <input placeholder="Telefone 1" type="text" value={telefone1} onChange={e => setTelefone1(e.target.value)} required/>
                        <input placeholder="Telefone 2" type="text" value={telefone2} onChange={e => setTelefone2(e.target.value)}/>
                    </div>
                    <div className="formSenha">
                        <input placeholder="Senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} required/>
                        <input placeholder="Confirmar senha" type="password"/>
                    </div>
                    <input type="submit" value="Cadastrar"/>
                </form>
            </section>

        </div>
    );
}
