import React from "react";
import styles from "@/modules/index.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <h1>Contáctanos</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" name="name" type="text"/>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" name="mail" type="email"/>
        <TextField
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="filled"
          name="contact"
        />
      </Box>
    </div>
  );
}

export default Footer;
