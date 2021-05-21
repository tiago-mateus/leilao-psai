import './styles.css';
//import { Link } from 'react-router-dom';
import React from "react";
import { FiLogOut } from 'react-icons/fi';

export default function Sale() {

    return (
        <div className="sale-container">
            <header>
                <button type="button">
                    <FiLogOut size={25} color="white" />
                </button>
            </header>

            <div className="card-container">
                <div className="card-profile">
                    <div className="gift">
                        <div className="img"></div>
                        <div className="info">
                            <h1 title="Carneiro">Carneiro</h1>
                            <form>
                                <div className="inputGroup">
                                    <input placeholder="R$ 00,00" type="number" />
                                    <input value="arrematar" type="submit" />
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
                        <div className="img"></div>
                        <div className="info">
                            <h1 title="Carneiro">Carneiro</h1>
                            <form>
                                <div className="inputGroup">
                                    <input placeholder="R$ 00,00" type="number" />
                                    <input value="arrematar" type="submit" />
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
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-profile">
                    <div className="gift">
                        <div className="img"></div>
                        <div className="info">
                            <h1 title="Carneiro">Carneiro</h1>
                            <form>
                                <div className="inputGroup">
                                    <input placeholder="R$ 00,00" type="number" />
                                    <input value="arrematar" type="submit" />
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
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    );
}
