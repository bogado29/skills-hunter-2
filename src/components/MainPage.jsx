import React, { lazy } from "react";
import { makeStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

/*Components imports*/
const MHeader = lazy(() => import('./MHeader'));
const MHero = lazy(() => import('./MHero'));
const MSeparador = lazy(() => import('./MSeparador'));
const MSeparadorTexto = lazy(() => import('./MSeparadorTexto'));

/*Skills*/
const Css3 = lazy(() => import('./Css3'));
const JavaScript = lazy(() => import('./JavaScript'));
const ReactFunct = lazy(() => import('./React'));
const Hero2 = lazy(() => import('./MHero2'));
const Newsletter = lazy(() => import('./Newsletter'));
const SearchBar= lazy(() => import('./searchbar'));


/* Esta es la pagina principal a donde termina llegando el usuario */

const useStyles = makeStyles((theme) => ({

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
            <SearchBar />
            <MSeparador />
            <Css3/>
            <MSeparador />
            <Hero2 />
            <MSeparador />
            <JavaScript />
            <MSeparador />
            <Newsletter />

        </div>
        </React.Fragment>

    )
}

export default function MainPage() {
    return <MainPageF />;
}
