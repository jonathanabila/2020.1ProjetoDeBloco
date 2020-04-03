import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, TextField, Grid, Hidden } from '@material-ui/core';
import Login from '../components/Login';
import { StoreContext } from "../store";

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
  const { state: {loginModal}, setState } = React.useContext(StoreContext);
  
  const classes = useStyles();
  const { width } = props;

  const handleOpen = () => {
    setState({loginModal: true})
  };

  const handleClose = () => {
    setState({loginModal: false})
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
        textField: 10,
        button: 1
      };
    }
    return defaultConfig;
  };
  
  const onChangeInput = (value) => {
    setState({searchInput: value})
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
            onChange={e => onChangeInput(e.target.value)}
          />
        </Grid>
        
        <Grid className={classes.button} item xs={widthHandle().button}>
          <Button variant="outlined" onClick={handleOpen}>
            Entrar
          </Button>
        </Grid>
      </Grid>
      <Login show={loginModal} handleClose={handleClose} />

      {props.children}
    </Container>
  );
}
