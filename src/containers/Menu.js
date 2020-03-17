import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, TextField, Grid, Hidden } from '@material-ui/core';
import Login from '../components/Login';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary
  },
  button: {
    display: 'flex',
    alignItems: 'center'
  }
}));

export default function Menu(props) {
  const classes = useStyles();
  const { width } = props;

  const [showLogin, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const widthHandle = () => {
    let defaultConfig = {
      logo: 1,
      textField: 8,
      inputField: 2,
      button: 1
    };

    if (['xs', 'sm'].indexOf(width) >= 0) {
      defaultConfig = {
        textField: 9,
        button: 1
      };
    }
    return defaultConfig;
  };

  return (
    <Container className={classes.root}>
      <Grid container spacing={1}>
        <Hidden only={['xs', 'sm']}>
          <Grid item xs={widthHandle().logo}>
            <a href="/">
              <img src="../logo.svg" alt="logo" />
            </a>
          </Grid>
        </Hidden>

        <Grid item xs={widthHandle().textField}>
          <TextField
            id="outlined-basic"
            label="Aonde você quer ir?"
            variant="outlined"
            fullWidth={true}
          />
        </Grid>

        <Grid className={classes.button} item xs={widthHandle().button}>
          <Button variant="outlined">Buscar</Button>
        </Grid>

        <Grid className={classes.button} item xs={widthHandle().button}>
          <Button variant="outlined" onClick={handleOpen}>
            Entrar
          </Button>
        </Grid>
      </Grid>
      <Login show={showLogin} handleClose={handleClose} />

      {props.children}
    </Container>
  );
}
