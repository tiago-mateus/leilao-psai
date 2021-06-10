import React, {useEffect, useState}from "react";
import api from '../../services/api';

export default function Historic({id}){
    let newArr = [];

    const [bids, setBids] = useState([]);



    useEffect(() => {
        setInterval(() => {

            api.get('historicBidsPerGift/'+id)
            .then(response =>{
                setBids(response.data);
            })
            
        }, 500);
    }, [id])

    return(
        <div className="historic">
        <h2>LANCES</h2>
        <table>
            <tr className="cabecalhoTR">
                <td>Nome</td>
                <td>Valor</td>
            </tr>
            <tbody>


                {bids.map((bids,i) =>(
                    <tr className="lances" key={i}>
                        <td>{bids.apelido}</td>
                        <td>R$ {bids.valor}</td>
                    </tr>
                ))}
  
            </tbody>
        </table>
    </div>
    )
}
