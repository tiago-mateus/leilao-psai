import './App.css';
import io from 'socket.io-client';
import React, { useState, useEffect } from "react";

function App() {

  const [gift, setGift] = useState([{}]);

  useEffect(() => {
    const socket = io('http://localhost:3333');

    socket.on("gift", data => {
      setGift(data);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="App">

      <header className="App-header">
        {gift.map((value, i) => { 
            console.log(value);
        })
        }
      </header>
    </div>
  );
}

export default App;
