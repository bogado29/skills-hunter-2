import React, { lazy } from "react";
import { AppBar } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


/*Components imports*/
const StickyFooter = lazy(() => import('./footer'));


const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },

    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/cup-resize.png'})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "100%"

    },

    colorText: {
        color: '#fff',
        fontFamily: 'Nunito'
      },

    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    cusButton: {
        color: '#90caf9'
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));




const tiers = [
    {
        title: 'Nada de conocimiento',
        description: [
            '¿Queres adentrarte al mundo de Sistemas?',
            'Conocer las tipos de puestos',],
        buttonText: 'Elegir',
        buttonVariant: 'contained',
        linkTo: "/mainpage"
    },
    {
        title: 'Algo de conocimiento',
        subheader: 'Opcion mas popular',
        description: [
            'Nociones basicos de programacion',
            'Conocer nuevas tecnologias',
        ],
        buttonText: 'Elegir',
        buttonVariant: 'contained',
        linkTo: "/mainpage"
    },
    {
        title: 'Bastante conocimiento',
        description: [
            'Buscar nuevos empleos',
            'Capacitarme en las tecnologias mejores pagas',
        ],
        buttonText: 'Elegir',
        buttonVariant: 'contained',
        linkTo: "/mainpage"
    },
];



function Expertice1() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}> 

            <CssBaseline />

            {/* Header */}
            <AppBar
                position="static"
                color="default"
                elevation={0}
                className={classes.appBar}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }
                }
            >
            </AppBar>
            {/* End Header */}

            {/* Hero unit */}
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    className={classes.colorText}
                >
                    ¿ Que conocimientos tenes en Sistemas ?
                </Typography>
                <Typography className={classes.colorText} variant="h5" align="center" color="text.secondary" component="p">
                    Queremos conocerte un poco mas de vos, selecciona que tipo de conocimientos tenes en el area de sistemas.
                </Typography>
            </Container>
            {/* End hero unit */}


            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid 
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            <Card >
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Pro'}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    className={classes.toolbar}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    <Box 
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                        }}
                                    >
                                    </Box>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button component={Link}to={tier.linkTo} color='Primary' fullWidth variant={tier.buttonVariant}>
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>


                
            </Container>
            {/* Footer */}


            {/* End footer */}

            </div>

            
        </React.Fragment>
    );
}

export default function IntroExpertice() {
    return <Expertice1 />;
}
