import './styles.css';
import React, { useEffect, useState } from "react";
import api from '../../../services/api';


export default function Sale() {

    const [gifts, setGift] = useState([]);
    const [gis, setGis] = useState([]);
    const [his, setHis] = useState([]);
    const [valor, setValor] = useState([]);
    const [vl, setVl] = useState([]);
    useEffect(() => {
    

        api.get('/live')
        .then(response => {
                setGift(response.data);
            
                gifts.map(value =>{
                    setGis(value.gift);
                })

                gifts.map(value =>{
                    setHis(value.hist);

                })
      
        })

    }, [gifts])

    document.body.style.background = "unset";

    return (

        <div className="live-container">
            <div className="livecontainer">

                <div className="livecard-container">

                    {gis.map((value, i) => ( 

                        <div className="livecard-profile" >
                            
                            <div className="livehistoric live">
                                <h2>{value.nome}</h2>
                                <h3>ÚLTIMOS LANCES</h3>
                                {his.filter(x=> x.idGift == value.id).map((bids, i) => (
                                    
                                            <h4 key={i}>
                                                
                                                R$ {bids.valor}
                                            </h4>
                                        ))}

                                {/* <table>
                                    <tr className="livecabecalhoTR">
                                        <td>Nome</td>
                                        <td>Valor</td>
                                    </tr>
                                    <tbody>


                                        {his.filter(x=> x.idGift == value.id).map((bids, i) => (
                                            <tr className="livelances" key={i}>
                                                <td>{bids.apelido}</td>
                                                <td>R$ {bids.valor}</td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table> */}
                            </div>

                            {/* <Historic id={gift.id} /> */}
                        </div>

                    ))}


                </div>

            </div>
        </div>
    );
}
