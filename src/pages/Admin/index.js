import './styles.css';
import { Link } from 'react-router-dom';
import React from "react";
import { FiLogOut, FiUsers } from 'react-icons/fi';
import { FaGavel, FaTrash, FaRegEdit} from 'react-icons/fa';

export default function Admin() {

    return (
        <div className="admin-container">
            <header>
                <Link to="/newGift" className="btn-cadastrar-prenda" >Cadastrar Prenda</Link>
                <Link className="btn-users" to="/users" ><FiUsers size={25} color="white" /></Link>
                <button type="button">
                    <FiLogOut size={25} color="white" />
                </button>
            </header>

            <div className="card-container">
                <div className="card-profile">
                    <div className="gift">
                        <div className="img">
                            <Link><FaTrash size={20} color="#d51e1e"/></Link>
                            <Link><FaRegEdit size={20} color="#0505a4"/></Link>
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
                            <Link><FaTrash size={20} color="#d51e1e"/></Link>
                            <Link><FaRegEdit size={20} color="#0505a4"/></Link>
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
                            <Link><FaTrash size={20} color="#d51e1e"/></Link>
                            <Link><FaRegEdit size={20} color="#0505a4"/></Link>
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
                            <Link><FaTrash size={20} color="#d51e1e"/></Link>
                            <Link><FaRegEdit size={20} color="#0505a4"/></Link>
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
                            <Link><FaTrash size={20} color="#d51e1e"/></Link>
                            <Link><FaRegEdit size={20} color="#0505a4"/></Link>
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
                            <Link><FaTrash size={20} color="#d51e1e"/></Link>
                            <Link><FaRegEdit size={20} color="#0505a4"/></Link>
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
        </div>
    );
}