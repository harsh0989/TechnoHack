import React, { useEffect, useState } from 'react'
import { AppBar, Button, Grid, IconButton, Toolbar } from '@mui/material'
import { Typography } from '@mui/material'
import logo from '../images/logo3.png'
import SafetyAudit from '../images/SafetyAudit.png'
import LOC from '../images/Loc.png'
import News from '../images/News.png'
import Safe from '../images/Safe.png'
import '../css/Dashboard.css'
import MenuIcon from '@mui/icons-material/Menu'
import GMap from './GMap'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router'
import 'leaflet/dist/leaflet.css';
import DashboardComp from '../components/DashboardComp'
import axios from 'axios'

const Dashboard = () => {

    let [toggle, setToggle] = useState(false)
    const toggleOpen = () => {
        const toggleFinal = toggle ? false : true;
        setToggle(toggleFinal)
        console.log(setToggle)
    }
    let [value, setValue] = useState({ link: '52781', phone_no: '736252' })
    const ShareLocation = () => {
        console.log("helu")
        var axios = require('axios');
        let data ={'link':'https://localhost:3000/tracker'}
        console.log(data)
        // var config = {
        //     method: 'post',
        //     url: 'https://safestree.herokuapp.com/api/share-location',
        //     headers: {
        //         ...data.getHeaders()
        //     },
        //     data: data
        // };

        // axios(config)
        //     .then(function (response) {
        //         console.log(JSON.stringify(response.data));
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

    }


    return (
        <>
            
            <Grid container style={{ position: 'absolute' }}>
                <Grid item className='Drawer' md={1} sx={{ backgroundColor: 'white', width: '100%', minHeight: '100vh', display: { xs: 'none', md: 'flex' }, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '3%' }} >
                    {/* <Grid item style={{ display: 'flex', width: '100%' }}>
                        <Button className='alertBtn' style={{ width: '100%', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '3px solid #E72222', color: 'white', backgroundColor: 'rgba(231, 34, 34, 0.63)' }}>ALERT</Button>
                    </Grid> */}
                </Grid>
                <Grid item xs={9} md={9} sx={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '90%', height: '90%' }}>
                        <GMap />
                    </div>
                </Grid>
            </Grid>
            <DashboardComp style={{ display: { xs: 'flex' } }} />
        </>

    )
}

export default Dashboard