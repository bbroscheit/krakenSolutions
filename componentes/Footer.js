import React from "react";
import { useState } from "react";
import styles from "@/modules/index.module.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
          <TextField
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            fullWidth
            name="name"
            type="text"
            value={input.name}
            onChange={(e) => handleChange(e)}
            className={styles.input}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            name="mail"
            type="mail"
            value={input.mail}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            id="outlined-basic"
            label="Teléfono"
            variant="outlined"
            fullWidth
            name="cel"
            type="text"
            value={input.cel}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
        <TextField
          id="outlined-basic"
          label="Motivo"
          variant="outlined"
          fullWidth
          name="subject"
          type="text"
          value={input.subject}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          id="filled-multiline-flexible"
          label="Descripción"
          multiline
          maxRows={4}
          variant="outlined"
          fullWidth
          name="description"
          value={input.description}
          onChange={(e) => handleChange(e)}
        />
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
