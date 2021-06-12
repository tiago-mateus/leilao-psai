// import './styles.css';
import React, { useEffect, useState } from "react";
import { FiLogOut } from 'react-icons/fi';
import Historic from '../../components/Historic';
import swal from 'sweetalert';
import api from '../../../services/api';
import {useHistory} from 'react-router-dom';


export default function Sale() {
    const history = useHistory();


    function sair(e){
        e.preventDefault();
        localStorage.removeItem("id");
        localStorage.removeItem("cpf");
        history.push("/")
    }


    if(localStorage.getItem('id') == null){
        history.push("/")
    }


    const [gifts, setGift] = useState([]);
    const [gis, setGis] = useState([]);
    const [his, setHis] = useState([]);
    const [valor, setValor] = useState([]);
    const [vl, setVl] = useState([]);
    const [live, setLive] = useState("");



    useEffect(() => {
    
    api.get('/liveurl')
    .then(response => {
        setLive(response.data);
    })

    console.log(live);
}, [
    
])
    useEffect(() => {
    

        api.get('/salegift')
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

    const add = (e, index) =>{
        let newArr = [...valor]; // copying the old datas array
        newArr[index] = e.target.value; // replace e.target.value with whatever you want to change it to
        setValor(newArr); 

    } 

    function handleBid(e,idGift, i, valorinicial) {
        e.preventDefault();

        api.get('/maxBid/' + idGift).then(response => {
            console.log(parseInt(valor[i]) > parseInt(response.data));

            if (parseInt(valor[i]) > parseInt(response.data) || response.data == "") {
                if(parseInt(valor[i]) > valorinicial){
                    let value = valor[i];
                    const data = { value, idGift }
                    api.post('/bid', data, {
                        headers: {
                            'Authorization': `${localStorage.getItem('id')}`
                        }
                    })
                } else{
                swal("Atenção!", "O Lance deve ser maior que R$ "+ valorinicial, "warning");

                }
            
            }else{
                swal("Atenção!", "o Lance deve ser maior que R$ "+ parseInt(response.data), "warning");
            }
        })




    }

    return (
        <div className="sale-containerMobile">
            <header>
                <button type="button"  onClick={e => sair(e)}>
                    <FiLogOut size={25} color="white"/>
                </button>
            </header>

            <div className="container">
            <div className="live">
                    <span>Live - Leilão Virtual 2021</span>
                <iframe  width="100%" height="100%" src={live+"?autoplay=1"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="card-container">



                    {gis.map((value, i) => ( 

                        <div className="card-profile" style={{display: 'block'}}>
                            <div className="gift">
                                <div className="img" style={{backgroundImage: `linear-gradient(179.84deg, rgba(255, 255, 255, 0) 38.04%, #FFFFFF 88.1%), url(${value.caminhoImg})`, backgroundSize: 'contain'}}></div>
                                <div className="info">
                                    <h1 title={value.nome}>{value.nome.length > 10 ? value.nome.substring(0, 10)+"..." : value.nome}</h1>
                                    <form onSubmit={e => handleBid(e, value.id, i, value.valorInicial)}>
                                        <div className="inputGroup">
                                  
                                            <input placeholder="R$ 00,00" type="number" key={i} value={valor[i]} onChange={e => add(e,  i)} />
                                            <input value="arrematar" type="submit" /> 
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="historic" style={{display: 'block'}}>
                                <h2>LANCES</h2>
                                <table>
                                    <tr className="cabecalhoTR">
                                        <td>Nome</td>
                                        <td>Valor</td>
                                    </tr>
                                    <tbody>


                                        {his.filter(x=> x.idGift == value.id).map((bids, i) => (
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
            
                
            </div>
        </div>

    );
}
