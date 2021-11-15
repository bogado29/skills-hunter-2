import React, { lazy } from "react";
import { makeStyles } from '@material-ui/core/styles';
import useWindowPosition from '../hook/useWindowPosition';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse, Grid,IconButton } from '@material-ui/core';

import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        //    display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },

    media: {
        height: 440,
    },
    title: {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#FFFFFF',
    },
    desc: {
        fontFamily: 'Nunito',
        fontSize: '1.1rem',
        color: '#FFFFFF',
    },

    rootCard: {
        maxWidth: 645,
        background: 'rgba(0,0,0,0.5)',
        margin: '20px',
        color: '#FFFFFF',
    },

    goDown: {
        color: '#E51442',
        fontSize: '4rem',
        justifyContent: 'center',
        alignItems: 'center',
      },

      container: {
        textAlign: 'center',
      },

}));

function LPSkillsLearnF() {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
        <div className={classes.root} id="place-to-visit">


            <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
                <Grid container className={classes.root} spacing={3}>
                    <Grid item xs={5}>
                        <Card className={classes.rootCard} sx={{ maxWidth: 345 }}>
                            <CardMedia
                                className={classes.media}
                                component="img"
                                image={process.env.PUBLIC_URL + '/assets/negative-pixels.jpg'}
                                alt="Desarrollo Back End"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" className={classes.title}>
                                    Desarrollo de Aplicaciones
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={classes.desc}>
                                    Desarrolla aplicaciones copadas, como los mejores docentes y bajo altos
                                    estandares de calidad, aprende todo para rockearla en sistemas.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>


                    <Grid item xs={5} >
                        <Card className={classes.rootCard} sx={{ maxWidth: 345 }}>
                            <CardMedia
                                className={classes.media}
                                component="img"
                                image={process.env.PUBLIC_URL + '/assets/security.jpg'}
                                alt="Desarrollo Back End"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" className={classes.title}>
                                    Ciberseguridad
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={classes.desc}>
                                    Tenes las herramientas para convertirte en un hacker etico (o no tanto) y
                                    romper todos los sistemas que quieras.
                                </Typography>
                            </CardContent>
                        </Card>

                    </Grid>


                </Grid>
            </Collapse>


            <div className={classes.container}>
                <Scroll to="log-in" smooth={true}>
                    <IconButton>
                        <ExpandMoreIcon className={classes.goDown} />
                    </IconButton>
                </Scroll>
            </div>

        </div>



    );
}


export default function LPSkillsLearn() {
    return <LPSkillsLearnF />;
}
