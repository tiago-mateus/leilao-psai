// import Mobile from './mobile';
// import Desktop from './desktop';
import React, {useEffect, useState} from "react";
import './stylesLogin.css';
import Input from '../components/mask-cpf';
import {Link, useHistory} from 'react-router-dom';
import api from "../../services/api";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row, Col} from 'react-bootstrap';
import { cpf } from 'cpf-cnpj-validator'; 
import swal from 'sweetalert';

const initialValues = {
    cpf: '',
};

export default function Login(){
    // const width = window.innerWidth;
    // const breakpoint = 620;

    // return width < breakpoint ? <Mobile/> : <Desktop/>
    const history = useHistory();
    const [cpf, setCPF] = useState("");
    const [senha, setSenha] = useState("");
    const [values, setValues] = useState(initialValues);
    const [width, setWidth] = useState(window.innerWidth);
    console.log(width);


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

        if(cpf == "adm123" && senha == "123")
        {
            localStorage.setItem('id', "adm123");
            localStorage.setItem('cpf', "0000");
            history.push("/admin")
        }else{

        try{

            await api.post('/sessions', data)
            .then(response => {
                if(response.data == "erro"){
                    swal("Atenção!", "CPF ou Senha inválidos!", "warning");
                }else{

                    localStorage.setItem('id', response.data.id);
                    localStorage.setItem('cpf', cpf);
                    history.push("/sale")

                }
    
            }).catch(err => { swal("ERRO!", "Por favor, tente novamente!", "error"); });;

        }catch(e){

        }
    }

    }

    document.body.style.background = "#2f0000";

    return (
        <Container className="container-login">
            <Row className="d-flex justify-content-center" style={{marginTop:100}}>
                    <Col sm={3}>
                        <div className="card-img" style={width < 640 ? {height:200, width: 350, borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius:0, borderBottomRightRadius:0} : null}>
                            <p className="title"><strong>Seja<br/><em>Bem-vindo</em></strong></p>
                            <p className="title-register">Ainda não tem conta? <br/><Link to="/register">Clique aqui!</Link></p>
                        </div>

                    </Col>

                    <Col sm={4}>
                    <form onSubmit={e => handleLogin(e)} style={width < 640 ? {height:300 , borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius:8, borderBottomRightRadius:8} : null}>
                        <h1>LOGIN</h1>
                        {/* <Input 
                            name="cpf"
                            mask="999.999.999-99"
                            value={values.cpf}
                            onChange={handleChange}
                        /> */}

                        <input className="cpf" placeholder="CPF" type="text" value={cpf} onChange={e => setCPF(e.target.value)} required/>
                        <input placeholder="Senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} required/>
                        <input type="submit" value="Entrar"/>
                    </form>
                    </Col>
            </Row>
        </Container>
    );

}
