import React, { useState } from 'react'
import { AppBar, Button, Grid, IconButton, Toolbar } from '@mui/material'
import { Typography } from '@mui/material'
import WrappedMap from '../components/GMap'
import GMap from '../components/GMap'
import logo from '../images/logo3.png'
import SafetyAudit from '../images/SafetyAudit.png'
import LOC from '../images/Loc.png'
import News from '../images/News.png'
import Safe from '../images/Safe.png'
import '../css/Dashboard.css'
import MenuIcon from '@mui/icons-material/Menu'
const Dashboard = () => {
    let [toggle, setToggle] = useState(false)
    const toggleOpen=() => {
        const toggleFinal = toggle ? false : true;
        setToggle(toggleFinal)
        console.log(setToggle)
        
    }
    return (
        <>
        <div className={toggle?'DrawerDiv' : 'NotDrawer'} >
        <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly' }} columns={12} rowGap={2}>
                        <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly' }} rowSpacing={10}>
                            <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                <Button sx={{ backgroundColor: '#F1F1F1', width: '10vw', height: '15vh' }}>
                                    <img src={SafetyAudit} alt='img' />
                                </Button>
                                <Typography sx={{ fontFamily: 'poppins', fontWeight: '500', fontSize: "15px", lineHeight: '40px' }}>Safety Audit</Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                <Button sx={{ backgroundColor: '#F1F1F1', width: '10vw', height: '15vh' }}>
                                    <img src={LOC} alt='img' />
                                </Button>
                                <Typography sx={{ fontFamily: 'poppins', fontWeight: '500', fontSize: "15px", lineHeight: '40px' }}>Share Location</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={10}>
                            <Button sx={{ backgroundColor: '#F1F1F1' }}>
                                <Grid container sx={{ display: 'flex', alignItems: 'center' }} columnGap={2} columns={14}>
                                    <Grid item xs={3} sx={{ backgroundColor: 'white', width: 'auto', padding: '10px', height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src={News} alt='img' />
                                    </Grid>
                                    <Grid item xs={9}>
                                        {/* <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Grid item>
                                        <Typography sx={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '15px' }}>Daily News</Typography>
                                    </Grid>
                                    <Grid item><Typography sx={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: '10px' }}>Keep yourself updated by the daily the daily incidences happening around you</Typography></Grid>
                                </Grid> */}
                                        <h2 style={{ fontSize: '15px', textAlign: 'left', color: 'black', fontFamily: 'Poppins', fontWeight: '600' }}>Daily News</h2>
                                        <p style={{ fontSize: '10px', textAlign: 'left', color: 'black', fontFamily: 'Poppins', fontWeight: '400' }}>Keep yourself updated by the daily the daily incidences happening around you</p>
                                    </Grid>
                                </Grid>
                            </Button>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={1} />
                        <Grid item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={10}>
                            <Button sx={{ backgroundColor: '#F1F1F1' }}>
                                <Grid container sx={{ display: 'flex', alignItems: 'center' }} columnGap={2} columns={14}>
                                    <Grid item xs={3} sx={{ backgroundColor: 'white', width: 'auto', padding: '10px', height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src={Safe} />
                                    </Grid>
                                    <Grid item xs={7}>
                                        <h2 style={{ fontSize: '15px', textAlign: 'left', color: 'black', fontFamily: 'Poppins', fontWeight: '600' }}>Nearby Safe spots</h2>
                                        <p style={{ fontSize: '10px', textAlign: 'left', color: 'black', fontFamily: 'Poppins', fontWeight: '400' }}>Find nearby NGO’s and Police Stations </p>
                                    </Grid>
                                    <Grid item xs={1} />
                                </Grid>
                            </Button>
                        </Grid>
                        <Grid item xs={1} />
                        <Button className='alertBtn' sx={{ background: 'rgba(231, 34, 34, 0.63)', border: '4px solid #FF0000', borderRadius: '7px', width: '85%', fontFamily: 'poppins', color: 'white' }}>Alert</Button>
                    </Grid>
        </div>
            <Grid container  style={{position:'relative'}}>
                <Grid item className='Drawer' md={3} sx={{ backgroundColor: 'white', width: '100%', minHeight: '100vh', paddingTop: '2vh', display:{xs:'none', md:'flex'} }} >
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly' }} columns={12} rowGap={2}>
                        <Grid item><img src={logo} alt='img' /></Grid>
                        <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly' }} rowSpacing={10}>
                            <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                <Button sx={{ backgroundColor: '#F1F1F1', width: '10vw', height: '15vh' }}>
                                    <img src={SafetyAudit} alt='img' />
                                </Button>
                                <Typography sx={{ fontFamily: 'poppins', fontWeight: '500', fontSize: "15px", lineHeight: '40px' }}>Safety Audit</Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                <Button sx={{ backgroundColor: '#F1F1F1', width: '10vw', height: '15vh' }}>
                                    <img src={LOC} alt='img' />
                                </Button>
                                <Typography sx={{ fontFamily: 'poppins', fontWeight: '500', fontSize: "15px", lineHeight: '40px' }}>Share Location</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={10}>
                            <Button sx={{ backgroundColor: '#F1F1F1' }}>
                                <Grid container sx={{ display: 'flex', alignItems: 'center' }} columnGap={2} columns={14}>
                                    <Grid item xs={3} sx={{ backgroundColor: 'white', width: 'auto', padding: '10px', height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src={News} alt='img' />
                                    </Grid>
                                    <Grid item xs={9}>
                                        {/* <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Grid item>
                                        <Typography sx={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '15px' }}>Daily News</Typography>
                                    </Grid>
                                    <Grid item><Typography sx={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: '10px' }}>Keep yourself updated by the daily the daily incidences happening around you</Typography></Grid>
                                </Grid> */}
                                        <h2 style={{ fontSize: '15px', textAlign: 'left', color: 'black', fontFamily: 'Poppins', fontWeight: '600' }}>Daily News</h2>
                                        <p style={{ fontSize: '10px', textAlign: 'left', color: 'black', fontFamily: 'Poppins', fontWeight: '400' }}>Keep yourself updated by the daily the daily incidences happening around you</p>
                                    </Grid>
                                </Grid>
                            </Button>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={1} />
                        <Grid item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={10}>
                            <Button sx={{ backgroundColor: '#F1F1F1' }}>
                                <Grid container sx={{ display: 'flex', alignItems: 'center' }} columnGap={2} columns={14}>
                                    <Grid item xs={3} sx={{ backgroundColor: 'white', width: 'auto', padding: '10px', height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src={Safe} />
                                    </Grid>
                                    <Grid item xs={7}>
                                        <h2 style={{ fontSize: '15px', textAlign: 'left', color: 'black', fontFamily: 'Poppins', fontWeight: '600' }}>Nearby Safe spots</h2>
                                        <p style={{ fontSize: '10px', textAlign: 'left', color: 'black', fontFamily: 'Poppins', fontWeight: '400' }}>Find nearby NGO’s and Police Stations </p>
                                    </Grid>
                                    <Grid item xs={1} />
                                </Grid>
                            </Button>
                        </Grid>
                        <Grid item xs={1} />
                        <Button className='alertBtn' sx={{ background: 'rgba(231, 34, 34, 0.63)', border: '4px solid #FF0000', borderRadius: '7px', width: '85%', fontFamily: 'poppins', color: 'white' }}>Alert</Button>
                    </Grid>
                </Grid>
                <Grid item xs={9} sx={{ backgroundColor: '#F1F1F1', width: '100%', height: '100%' }}>
                    <div style={{ width: '100%', height: '100%' }}>
                        {/* <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{height:'100%'}}/>}
                containerElement={<div style={{height:'100%'}}/>}
                mapElement={<div style={{height:'100%'}}/>}
                /> */}
                        {/* <GMap /> */}
                    </div>
                </Grid>
            </Grid>
            <AppBar sx={{ display: { xs: 'flex', md: 'none' }, backgroundColor:'transparent', boxShadow:'none',justifyContent:'space-between', padding:'2%' }}>
                <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                    <IconButton size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, color:'#E02768' }}
                        onClick={toggleOpen}>
                        <MenuIcon />
                    </IconButton>
                    <img src={logo} alt='img' />
                </Toolbar>
            </AppBar>
        </>

    )
}

export default Dashboard