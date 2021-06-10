import React, { useState, useEffect } from "react";
import api from '../../services/api';


export default function ButtonLeiloando({id}) {

    function leiloar(e, id){
        e.preventDefault();
        let leiloando = 0;
        const data = { leiloando }

        api.put('/leiloar/'+id, data)
        .then(response => {
            
        })


    }

    return (
        <div className="container-button">
            <button style={{pointerEvents: "none"}}><span>Leiloando...</span></button>
            <button onClick={e=> leiloar(e, id)} >Parar</button>
        </div>
    );
}