import React, { lazy } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Grid  } from '@material-ui/core';

const StickyFooter = lazy(() => import('./footer'));


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    appbar: {
        background: 'none',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    colorText: {
        color: '#5AFF3D',
    },

    corlorTextP: {
        color: '#E51442',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '4.5rem',
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '4rem',
    },
    media: {
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Nunito',

    },

    heroButtons: {
        marginTop: theme.spacing(4),
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '2rem',
        //maxWidth: '4rem', 
        //maxHeight: '30px', minWidth: '30px', minHeight: '30px'
      },
}));


function LPLogInF() {
    const classes = useStyles();

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <React.Fragment>
            <div className={classes.root} id="log-in">

                <div className={classes.container}>
                    <h1 className={classes.title}>
                        <span className={classes.colorText}>¿Estas</span> listo <br />
                        para <span className={classes.corlorTextP}> Empezar?</span>
                    </h1>
                    <h1>

                    <div className={classes.heroButtons}>
              <Grid container spacing={6} justifyContent="center">
                <Grid item>
                  <Button 
                  variant="contained" 
                  color="primary"
                  component={Link}to="/login">
                    Iniciar Sesion
                  </Button>
                </Grid>
                <Grid item>
                  <Button 
                  variant="contained" 
                  color="primary" 
                  component={Link}to="/signup">
                    Registrarse
                  </Button>
                </Grid>
              </Grid>
            </div>
                    </h1>
                </div>
            </div>



            <div><StickyFooter /></div>
        </React.Fragment>

    );
}
export default function LPLogIn() {
    return <LPLogInF />;
}
