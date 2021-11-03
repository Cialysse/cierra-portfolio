
import React from 'react'
import { Typography, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    container: {
        textAlign: 'center'
    },
    colorText: {
        color: 'white',
    },
}));

export default function Intro() {
    const classes = useStyles();
    // const checked = usewindowPosition('header');
    return (
        <div className={classes.root}>
            <div className={classes.container}>
            <Typography variant="h3" className={classes.colorText}>My name is Cierra Marshall. And I'm a Front-end Developer.</Typography>
            </div>
             
        </div>
    )
}

