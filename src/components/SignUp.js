import React from "react";
import { Button, FormGroup, Modal, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


const useStyles = makeStyles(theme => ({
  modal: {
    position: 'absolute',
    minWidth: '50%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}));

export default function SignUpModal(props) {
  const classes = useStyles();
  return (
    <Modal
      open={props.show}
      onClose={props.handleClose}
    >
      <div className={classes.modal}>
        <h3 id="simple-modal-title">Que bom ver você de novo. Faça login!</h3>
        <FormGroup>
          <TextField id="email-address" label="Endereço de e-mail" />
          <TextField id="password" label="Crie uma senha" />
          <Button>Faça login</Button>
          <Typography className={classes.createAccount}>
            Já tem uma conta? <a href="/">Faça login</a>
          </Typography>
          <FormControlLabel control={<Checkbox value="checkedC" />} label="Uncontrolled" />
          <Typography>
            Concordo com as condições de uso da plataforma.
          </Typography>
        </FormGroup>
      </div>
    </Modal>
  );
}
