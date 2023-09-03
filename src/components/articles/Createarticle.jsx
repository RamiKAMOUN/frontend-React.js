import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { addArticle } from '../../services/ArticleService';

const Creatarticle =({addProduct,scategories})=>{
  const [reference,setreference]=useState("");
  const[designation,setDesignation]=useState("");
  const[prix,setPrix]=useState("");
  const[marque,setMarque]=useState("");
  const[qtestock,setQtestock]=useState("");
  const[ imageart,setImageart]=useState("");
  const [scategorieID, setScategorieID] = useState("");

  const[validated,setValideted]=useState(false);
  const[show,setShow]=useState(false)

  const handleClose=()=>setShow(false);
  const handleShow=()=>setShow(true);

  const handleSubmit=(e)=>{
    e.preventDefault();
    const form=e.curentTarget;
    if(form.chekValidity()===true){
      const newProduct={
        reference,
        designation,
        prix,
        marque,
        qtestock,
        imageart,
        scategorieID
        };
        addArticle(newProduct)
        .then(res=>{
          const response=res.data;
        })
      }
    }
  }
