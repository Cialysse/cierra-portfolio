import Navbar from "./components/Navbar"
import Intro from "./pages/Intro"
// import Portfolio from "./components/Portfolio"
import Projects from "./pages/Projects"
// import Contact from "./components/Contact"
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  // "@global": {
  //   body: {
  //     backgroundImage:"url(${'CierraImg'})",
  //     height: '100%',
  //   },
  // },
  root: {
    minHeight: '100vh',
    backgroundColor: '#2a47b6',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // backgroundImage:'url(./assets/CierraImg.jpg)'
  },
}));

export default function App() {
  const classes = useStyles();
  return  (
  <div className={classes.root}>

    <CssBaseline />
    <Navbar />
    <Projects />
    <Intro/>
  </div> 
  )
  //   <div className='app'>
  //    
  //     <div className="sections">
  //     
  //       <Portfolio/>
  //       <Works/>
  //       <Contact/>

        
        
        
  //     </div>
  //   </div>
  // );
}

