import React from 'react';
import {
  Button,
  FormGroup,
  Modal,
  TextField,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  },
  createAccount: {
    '& a': {
      textDecoration: 'none',
      color: 'black'
    },
    '& a:hover': {
      textDecoration: 'underline',
      color: 'blue'
    }
  }
}));

export default function Login(props) {
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.show}
      onClose={props.handleClose}
    >
      <div className={classes.modal}>
        <h3 id="simple-modal-title">Que bom ver você de novo. Faça login!</h3>
        <FormGroup>
          <TextField id="email-address" label="Endereço de e-mail" />
          <TextField id="password" label="Senha" />
          <Button>Faça login</Button>
          <Typography className={classes.createAccount}>
            Não possui conta? <a href="/">Inscreva-se</a>
          </Typography>
        </FormGroup>
      </div>
    </Modal>
  );
}
