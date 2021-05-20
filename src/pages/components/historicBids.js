import React from "react";

export default function Historic({nome, valor}){

    return(
    <div className="historic">
    <h2>LANCES</h2>
    <table>
        <tr className="cabecalhoTR">
            <td>Nome</td>
            <td>Valor</td>
        </tr>
        <tr className="lances">
            <td>Tiago Mateus</td>
            <td>R$ 100,00</td>
        </tr>
    </table>
    </div>
    )
}