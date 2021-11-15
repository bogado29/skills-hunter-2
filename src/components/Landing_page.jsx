import React, { lazy } from "react";
import { makeStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

/*Components imports*/
const LPHeader = lazy(() => import('./LPHeader'));
const LPSkillsLearn = lazy(() => import('./LPSkillsLearn'));
const LPLogIn = lazy(() => import('./LPLogIn'));


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



function LandingPageF() {
    const classes = useStyles();
    return (
        <React.Fragment>

            <div className={classes.root}> 
            <CssBaseline />
            <LPHeader />
            <LPSkillsLearn />
            <LPLogIn />
            </div>
        </React.Fragment>

    )
}

export default function LandingPage() {
    return <LandingPageF />;
}
