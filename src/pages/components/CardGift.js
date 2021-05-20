import io from 'socket.io-client';
import React, { useState, useEffect } from "react";
import Historic from '../components/historicBids';

export default function CardGift({nome, id}){
    const [bid, setBid] = useState([{}]);
    const [lance, setLance] = useState(0);

    useEffect(() => {
      const socket = io('http://localhost:3333');

      socket.emit('message', id);

      socket.on('bids', data => {
        setBid(data);
    });
      return () => socket.disconnect();
    }, []);

    function Lance(valor){
        setLance(valor);
        console.log(valor);
    }

    function cadLance(){
        // socket.emit('lance', lance);
        // socket.disconnect()
    }

    return (

        <div style={{display:'flex'}}>
            <div className="card-profile" >
            <div className="card-img"></div>
            <div className="card-info">
                <h1 title={nome}>{nome}</h1>
                <form>

                    <div className="inputGroup">
                        <input placeholder="R$ 00,00" type="number" onChange={event => Lance(event.target.value)}/>
                        <input  value="arrematar" type="submit" onClick={cadLance()}/>
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
                    {bid.map(value => (
                        <tr className="lances">
                       
                        <td>{value.nome}</td>
                        <td>R$ {value.valor}</td>
                       
                        </tr> 
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        
        
    )
}