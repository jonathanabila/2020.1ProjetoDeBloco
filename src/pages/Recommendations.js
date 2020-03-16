import React from 'react';
import {
  Grid,
  Container,
  Paper,
  Typography,
  Button,
  Avatar,
  Hidden
} from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

import { makeStyles } from '@material-ui/core/styles';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import RateReviewIcon from '@material-ui/icons/RateReview';
import fakerImage from '../helpers/fakerImage';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    marginTop: '15px'
  },
  platformTopics: {
    marginBottom: '15px',
    padding: '10px',
    '& ul': {
      textAlign: 'left',
      '& li': {
        marginTop: '25px'
      }
    },
    '& Button': {
      margin: '20px auto',
      display: 'block'
    }
  },
  avatarGroup: {
    width: '50%',
    margin: '0 auto',
    padding: '10px'
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  images: {
    paddingBottom: '10px',
    '& a': {
      '& img': {
        borderRadius: '25px',
        maxWidth: '80%',
        height: 'auto'
      }
    }
  },
  aWithoutDecoration: {
    '& a': {
      textDecoration: 'none',
      color: 'black'
    }
  }
}));

export default function Recommendations() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={1}>
        <Hidden only={['xs', 'sm']}>
          <Grid item xs={3}>
            <Paper className={classes.platformTopics}>
              <AvatarGroup className={classes.avatarGroup}>
                <Avatar alt="Remy Sharp" />
                <Avatar alt="Travis Howard" />
                <Avatar alt="Cindy Baker" />
              </AvatarGroup>

              <Typography variant="subtitle1" gutterBottom>
                <b>Acesse o melhor da plataforma</b>
              </Typography>
              <ul>
                <li>
                  Salve as suas ideias de viagem preferidas e veja tudo em mapa
                </li>
                <li>Receba alertas de próximos eventos</li>
                <li>Interaja com a comunidade</li>
              </ul>

              <Button variant="outlined">Inscreva-se</Button>
            </Paper>
            <Paper className={classes.aWithoutDecoration}>
              <Typography variant="subtitle1" gutterBottom>
                <b>Compartilhe dicas de viagem</b>
              </Typography>
              <a href="/">
                <CameraAltIcon />
                <Typography>Publicar fotos</Typography>
              </a>
              <a href="/">
                <RateReviewIcon />
                <Typography>Fazer Avaliações</Typography>
              </a>
            </Paper>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={6}>
          <Paper>
            <Typography variant="subtitle1" gutterBottom>
              <b>Recomendações para você</b>
            </Typography>
          </Paper>
        </Grid>

        <Hidden only={['xs', 'sm']}>
          <Grid item xs={3}>
            <Paper>
              <Typography variant="subtitle1" gutterBottom>
                <b>Passeios em alta</b>
              </Typography>

              <Grid className={classes.images}>
                <a href="/">
                  <img src={fakerImage()} alt="Random city" />
                </a>
              </Grid>
              <Grid className={classes.images}>
                <a href="/">
                  <img src={fakerImage()} alt="Random city" />
                </a>
              </Grid>
              <Grid className={classes.images}>
                <a href="/">
                  <img src={fakerImage()} alt="Random city" />
                </a>
              </Grid>
            </Paper>
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
}
