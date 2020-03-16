import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Button,
  MenuItem,
  TextField,
  Grid,
  Hidden
} from '@material-ui/core';

const pointsOfInterest = [
  {
    value: 'Hospitais'
  },
  {
    value: 'Delegacias'
  },
  {
    value: 'Pontos Turísticos'
  },
  {
    value: 'Praias'
  },
  {
    value: 'Onde Comer'
  },
  {
    value: 'Onde Dormir'
  },
  {
    value: 'Eventos'
  },
  {
    value: 'Banheiros'
  }
];

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

  const widthHandle = () => {
    let defaultConfig = {
      logo: 1,
      textField: 8,
      inputField: 2,
      button: 1
    };

    if (['xs', 'sm'].indexOf(width) >= 0) {
      defaultConfig = {
        textField: 12,
        button: 1
      };
    }
    return defaultConfig;
  };

  const [item, setPointOfInterest] = React.useState('');

  const handleChange = event => {
    setPointOfInterest(event.target.value);
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
            label="Search"
            variant="outlined"
            fullWidth={true}
          />
        </Grid>

        <Hidden only={['xs', 'sm']}>
          <Grid item xs={widthHandle().inputField}>
            <TextField
              id="point-of-interest"
              select
              label="Selecione"
              value={item}
              onChange={handleChange}
              fullWidth={true}
            >
              {pointsOfInterest.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Hidden>

        <Grid className={classes.button} item xs={widthHandle().button}>
          <Button variant="outlined">Buscar</Button>
        </Grid>
      </Grid>

      {props.children}
    </Container>
  );
}
