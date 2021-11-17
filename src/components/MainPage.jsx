import React, { lazy } from "react";
import { makeStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

/*Components imports*/
const MHeader = lazy(() => import('./MHeader'));
const MHero = lazy(() => import('./MHero'));
const MSeparador = lazy(() => import('./MSeparador'));
const MSeparadorTexto = lazy(() => import('./MSeparadorTexto'));



/* Esta es la pagina principal a donde termina llegando el usuario */

const useStyles = makeStyles((theme) => ({
/*    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/cup-resize.png'})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repet',

    }
*/

root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/cup-resize.png'})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "100%"
    }
})); 



function MainPageF() {
    const classes = useStyles();
    return (
        <React.Fragment>

            <div className={classes.root}> 
            
            <CssBaseline />
            <MHeader />
            <MHero />
            <MSeparador /> 

            </div>
        </React.Fragment>

    )
}

export default function MainPage() {
    return <MainPageF />;
}
