import './styles.css';
import React, {useEffect, useState} from "react";
import { FiLogOut } from 'react-icons/fi';
import Historic from '../components/Historic';

import api from '../../services/api';

export default function Sale() {

    const [gifts, setGift] = useState([]);
    const [valor, setValor] = useState([]);

    useEffect(() => {
        api.get('/gift')
        .then(response =>{
            setGift(response.data);
        })
    }, [])


    function handleBid(e, idGift, valorAtual){
        e.preventDefault();
   
        const data = {
            valor,
            idGift
        }

        console.log(data);
        api.post('/bid', data,{
            headers: {
              'Authorization': `${localStorage.getItem('id')}` 
            }})
        .then(response =>{
            console.log(response.data);
        })

    }

    return (
        <div className="sale-container">
            <header>
                <button type="button">
                    <FiLogOut size={25} color="white" />
                </button>
            </header>

            <div className="card-container">
              {gifts.map(gift => (
                    <div className="card-profile" >
                    <div className="gift">
                        <div className="img"></div>
                        <div className="info">
                            <h1 title="Carneiro">{gift.nome}</h1>
                            <form onSubmit={e => handleBid(e, gift.id)}>
                                <div className="inputGroup">
                                    <input placeholder="R$ 00,00" type="number" key={gift.id}  value={valor} onChange={e => setValor(e.target.value)}/>
                                    <input value="arrematar" type="submit" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <Historic id={gift.id}/>
                </div>

              ))}

              
            </div>
        </div>
    );
}