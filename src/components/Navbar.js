import { AppBar, IconButton, makeStyles, Toolbar, Fade } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import SortIcon from '@mui/icons-material/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    appbar:{
        background:"none",
        fontFamily: 'Oxygen',
    },
    appWrapper:{
        width:'80%',
        margin: '0 auto',
    },
    appbarTitle:{
        flexgrow: '1',
    },
    icon: {
        color: '#fff',
        fontSize: "2rem",
    },
    colorText: {
        color: '#d4b4cc'
    },
    container: {
        textAlign: 'center',
        fontSize: '4.5rem',
    },
    goDown: {
        color:"#d4b4cc",
        fontSize: '4rem',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '3rem',
    }
}));

export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, [])
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper} >
                <h1 className={classes.appbarTitle} >Cierra.</h1>
                <IconButton>
                    <SortIcon className={classes.icon}/>
                </IconButton>
                </Toolbar>
            </AppBar>

            <Fade in={checked}
            {...(checked ? { timeout: 1000 } : {})}>
           
            <div className={classes.container}>
                <h1 className={classes.title}>Welcome to <br /> Cierra's <span className={classes.colorText}>Site.</span></h1>
                <IconButton>
                    <ExpandMoreIcon className={classes.goDown} />
                </IconButton>
            </div>
            </Fade>
        </div>
    )
}

// const Navbar = () => {
//     return (
//         <div className='navbar'>
//             <div className='wrapper'>
//                 <div className='home'>
//                 <a href="#intro" className='logo'>Cierra.</a>
//                 </div>
//                 <div className='nav-logo'>
//                 </div>
//             </div>
//         </div>
//     )
// }
