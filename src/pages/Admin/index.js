import './styles.css';
import { Link } from 'react-router-dom';
import React, {useState} from "react";
import { FiLogOut, FiUsers } from 'react-icons/fi';
import { FaGavel, FaTrash, FaRegEdit} from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Admin() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="admin-container">
            <header>
            <Button className="btn-cadastrar-prenda" onClick={handleShow}> Cadastrar Prenda</Button>
                <Link className="btn-users" to="/users" ><FiUsers size={25} color="white" /></Link>
                <button type="button">
                    <FiLogOut size={25} color="white" />
                </button>
            </header>

            <div className="card-container">
                <div className="card-profile">
                    <div className="gift">
                        <div className="img">
                            <Link><FaRegEdit size={20} color="#0505a4"/></Link>
                            <Link><FaTrash size={20} color="#d51e1e"/></Link>
                        </div>
                        <div className="info">
                            <h1 title="Carneiro">Carneiro</h1>
                            <h1 title="Carneiro">R$ 200,00</h1>
                            <form>
                                <div className="inputGroup">
                                    <button>Leiloar</button>
                                    <button><FaGavel size={25} color="white"/></button>

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
                                <tr className="lances">
                                    <td>Tiago</td>
                                    <td>R$ 200,00</td>
                                </tr>
                                <tr className="lances">
                                    <td>Tiago</td>
                                    <td>R$ 200,00</td>
                                </tr>
                                <tr className="lances">
                                    <td>Tiago</td>
                                    <td>R$ 200,00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="card-profile">
                    <div className="gift">
                        <div className="img">
                            <Link><FaRegEdit size={20} color="#0505a4"/></Link>
                            <Link><FaTrash size={20} color="#d51e1e"/></Link>
                        </div>
                        <div className="info">
                            <h1 title="Carneiro">Carneiro</h1>
                            <h1 title="Carneiro">R$ 200,00</h1>
                            <form>
                                <div className="inputGroup">
                                    <button>Leiloar</button>
                                    <button><FaGavel size={25} color="white"/></button>

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
                                <tr className="lances">
                                    <td>Tiago</td>
                                    <td>R$ 200,00</td>
                                </tr>
                                <tr className="lances">
                                    <td>Tiago</td>
                                    <td>R$ 200,00</td>
                                </tr>
                                <tr className="lances">
                                    <td>Tiago</td>
                                    <td>R$ 200,00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


            

            </div>


  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
          <Row>
          <Col>
                <div className="img">

                </div>
                </Col>

                <Col>
                <input placeholder="Nome" type="text" />
                <input placeholder="Valor Inicial" type="number" />
                <Button variant="secondary" onClick={handleClose} className="btn-cancelar">
              Cancelar
            </Button>
            <Button variant="primary" className="btn-salvar">Salvar</Button>
                </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>
        </div>
    );
}