import * as React from 'react';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    colorText: {
        color: '#fff',
        fontSize: '2rem',
      },
    }));

function StickyFooterF(props) {
    const classes = useStyles();

    return (
        
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography className={classes.colorText} variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            {new Date().getFullYear()}
            <Link color="inherit" to="/about">Skills Hunter</Link>
            {'.'}
        </Typography>
        </Container>
    );
}



export default function StickyFooter() {
    return <StickyFooterF />;
}
