import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({

  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/negative-pixels.jpg'})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "100%"

  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#FFFFFF',
  },
    paperStyle: 
  { 
    padding: '30px 20px', 
    width: 500, 
    margin: "20px auto" 
  },
  headerStyle: { margin: 0 },
  avatarStyle: { backgroundColor: '#1bbd7e' },
  marginTop: { marginTop: 5 },
}));

 function SignUpF() {
  const classes = useStyles();

  return (
    <div className={classes.root}> 
        <Grid>
            <Paper elevation={20} className={classes.paperStyle}>
                <Grid align='center'>
                    <Avatar className={classes.avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 className={classes.headerStyle}>Registrarse</h2>
                    <Typography variant='caption' gutterBottom>Completa el siguiente formulario para darte de alta !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Nombre' placeholder="Nombre" />
                    <TextField fullWidth label='Email' placeholder="Email" />
                    <FormControl component="fieldset" className={classes.marginTop}>
                    </FormControl>
                    <TextField fullWidth label='Numero de Celular' placeholder="Numero de Celular" />
                    <TextField fullWidth label='Contraseña' type="password" placeholder="Contraseña"/>
                    <TextField fullWidth label='Confirmar Contraseña' type="password" placeholder="Confirmar Contraseña"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Acepto los terminos y condiciones."
                    />
                    <Button component={Link}to="/introExpertice" type='submit' variant='contained' color='primary'>Registrarse</Button>
                </form>
            </Paper>
        </Grid>
        <Copyright />
    </div>
  );
}

function Copyright() {
  
  const classes = useStyles();

  
  return (
    <Typography variant="body2" color="textSecondary" align="center" className={classes.desc}>
      {'Copyright © '}
      <Link color="inherit" to="/about">
      Skills Hunter
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignUp() {
  return <SignUpF />;
}