import React from "react";
import { useState } from "react";
import styles from "@/modules/index.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Swal from 'sweetalert2'

function Footer() {
  const [input, setInput] = useState({
    name: "",
    mail: "",
    cel: "",
    subject: "",
    description: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleReset(e) {
    e.preventDefault();
    setInput({
      name: "",
      mail: "",
      cel: "",
      subject: "",
      description: "",
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    Swal.fire({
      title: 'Tu Email fue enviado!',
      icon: 'success',
    })
    setInput({
      name: "",
      mail: "",
      cel: "",
      subject: "",
      description: "",
    });
  }

  return (
    <div className={styles.footerContainer}>
      <h1>Contáctanos</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "65ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className={styles.firstForm}>
          <label>Ingrese su Nombre : </label>
          <input type="text" name="name" value={input.name} onChange={e => handleChange(e)}/>
          <label>Ingrese su Email : </label>
          <input type="email" name="mail" value={input.mail} onChange={e => handleChange(e)}/>
          <label>Motivo : </label>
          <input type="text" name="subject" value={input.subject} onChange={e => handleChange(e)}/>
          <label>Descripción : </label>
          <textarea type="text" name="description" value={input.description} onChange={e => handleChange(e)} rows="7"/>
        </div>
        <div className={styles.buttonForm}>
        
          <Button variant="contained" onClick={(e) => handleSubmit(e)}>
            Enviar
          </Button>
          <Button variant="contained" onClick={(e) => handleReset(e)}>
            Borrar
          </Button>
        
        </div>
      </Box>
    </div>
  );
}

export default Footer;
