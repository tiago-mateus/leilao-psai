import './styles.css';
import {useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { FiLogOut, FiUsers } from 'react-icons/fi';
import { FaGavel, FaTrash, FaRegEdit } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import api from '../../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonLeiloando from '../components/ButtonLeiloando';

export default function Admin() {
    const history = useHistory();


    function sair(e){
        e.preventDefault();
        localStorage.removeItem("id");
        localStorage.removeItem("cpf");
        history.push("/")
    }


    if(localStorage.getItem('id') == null && localStorage.getItem('id') != "adm123" && localStorage.getItem('id') != "0000"){
        history.push("/")
    }

    const [gifts, setGift] = useState([]);
    const [gis, setGis] = useState([]);
    const [his, setHis] = useState([]);
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState();
    const [idEditar, setIdEditar] = useState();
    const [file, setFile] = useState([]);

    function editarPrenda(e) {
        e.preventDefault();
        const form = new FormData();

        form.append("file", file);
        form.append("nome", nome);
        form.append("valor",valor);
        console.log(form)
        console.log(idEditar != null)
        if(idEditar != null){
        api.put('/editarPrenda/' + idEditar, form)
            .then(response => {
            })
        }else{
            console.log(form);
            api.post('/gift', form)
            .then(response => {
            })
        }

    }

    useEffect(() => {


        api.get('/salegiftadm')
            .then(response => {
                setGift(response.data);

                gifts.map(value => {
                    setGis(value.gift);
                })

                gifts.map(value => {
                    setHis(value.hist);
                })

            })


    }, [gifts])

    function leiloar(e, id) {
        e.preventDefault();
        let leiloando = 1;
        const data = { leiloando }

        api.put('/leiloar/' + id, data)
            .then(response => {
            })


    }

    function arrematar(e, id) {
        e.preventDefault();
        api.put('/arrematar/' + id)
            .then(response => {
            })


    }

    function Delete(e, id) {
        e.preventDefault();
        console.log(id);
        api.delete('/gift/' + id)
            .then(response => {
            })
    }
    const [show, setShow] = useState(false);
    const [showUser, setShowUser] = useState(false);
    const [user, setUser] = useState([]);

    const handleClose = () => {
           setShow(false);setShowUser(false);
    }

    function handleShow(e, id, nome, valor) {
        e.preventDefault();
        setIdEditar(id);
        setNome(nome);
        setValor(valor);
        setShow(true);
    }

    function handleShowUser(e, id) {
        e.preventDefault();
        console.log(id);
        api.get('/userInfo/'+id)
            .then(response => {
                setUser(response.data);
            })

        setShowUser(true);
    }

    const ModalInfo = () =>{
        return (
            user.map(value =>(
            <Modal.Body>
                <span>                  
                <label>Nome</label>                          
                <h5>{value.nome}</h5>         
              </span>

              <span>                  
                <label>Apelido</label>                          
                <h5>{value.apelido}</h5>         
              </span>

              <span>                  
                <label>CPF</label>                          
                <h5>{value.cpf}</h5>         
              </span>

              <span>                  
                <label>Endereco</label>                          
                <h5>{value.endereco}</h5>         
              </span>

              <span>                  
                <label>Bairro</label>                          
                <h5>{value.bairro}</h5>         
              </span>

              <span>                  
                <label>Cidade</label>                          
                <h5>{value.cidade}</h5>         
              </span>

              <span>                  
                <label>Telefone 1</label>                          
                <h5>{value.telefone1}</h5>         
              </span>

              <span>                  
                <label>Telefone 2</label>                          
                <h5>{value.telefone2}</h5>         
              </span>
         
            
            </Modal.Body>
                ))

        )
    }
    return (
        <div className="admin-container">
            <header>
                <Button className="btn-cadastrar-prenda" onClick={e => handleShow(e, null, null, null)} >Cadastrar prenda</Button>
                <Link className="btn-users" to="/live" ><FiUsers size={25} color="white" /></Link>
                <button type="button" onClick={e=> sair(e)}>
                    <FiLogOut size={25} color="white" />
                </button>
            </header>

            <div className="card-container">


                {gis.map((gift, i) => (
                    <div className="card-profile">
                        <div className="gift">
                            <div className="img" style={{ backgroundImage: `linear-gradient(179.84deg, rgba(255, 255, 255, 0) 38.04%, #FFFFFF 88.1%), url(${gift.caminhoImg})`, backgroundSize: 'contain' }}>
                                <Link onClick={e => handleShow(e, gift.id, gift.nome, gift.valorInicial)}><FaRegEdit size={20} color="#0505a4" /></Link>
                                <Link onClick={e => Delete(e, gift.id)}><FaTrash size={20} color="#d51e1e" /></Link>
                            </div>
                            <div className="info">
                                <h1 title="Carneiro">{gift.nome}</h1>
                                <h1 title="Carneiro">R${gift.valorInicial}</h1>
                                <form>
                                    <div className="inputGroup">
                                        {gift.leiloando ? gift.arrematado == null ? (<ButtonLeiloando id={gift.id} />) : null : (<button onClick={e => leiloar(e, gift.id, 1)}>Leiloar</button>)}
                                        <button style={gift.arrematado != null ? { backgroundColor: "#4e5d74", height: "50px", pointerEvents: "none" } : {}} className="buttonarematar" onClick={e => arrematar(e, gift.id)}><FaGavel size={25} color="white" /></button>

                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="historic">
                            <h2>LANCES</h2>
                            <table>
                                <tr className="cabecalhoTR">
                                    <td>Nome</td>
                                    <td>Valor</td>
                                </tr>
                                <tbody>

                                    {gift.arrematado != null ?
                                        his.filter(x => x.idGift == gift.id).map((bids, i) => (
                                            <tr className="lances arrematado" key={i}>

                                                <td><Link onClick={e=> handleShowUser(e, gift.arrematado)}>{bids.apelido} </Link></td>
                                                <td><Link onClick={e=> handleShowUser(e, gift.arrematado)}>R$ {bids.valor}</Link></td>

                                            </tr>
                                        )) : his.filter(x => x.idGift == gift.id).map((bids, i) => (
                                            <tr className="lances" key={i}>
                                                <td>{bids.apelido}</td>
                                                <td>R$ {bids.valor}</td>
                                            </tr>
                                        ))}

                                </tbody>
                            </table>
                        </div>

                    </div>
                ))}

            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Prenda</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
                        <input type="text" placeholder="R$ 00,00" value={valor} onChange={e => setValor(e.target.value)} />
                        <input type="file" onChange={e => setFile(e.target.files[0])} />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                    <Button variant="primary" onClick={e => editarPrenda(e)}>Salvar</Button>
                </Modal.Footer>
            </Modal> 

            <Modal
                show={showUser}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Informações</Modal.Title>
                </Modal.Header>
                   <ModalInfo/>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>


        </div>


    );
}