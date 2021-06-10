import './stylesNewGift.css';
import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NewGift() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div className="container-cadastro-gift">
        <form>
          <input/>
          <input/>
        </form>
      </div>
    );
  }
  