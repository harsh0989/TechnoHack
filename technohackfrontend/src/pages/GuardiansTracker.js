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
import DashboardComp from '../components/DashboardComp'

const Dashboard = () => {

    let [toggle, setToggle] = useState(false)
    const toggleOpen = () => {
        const toggleFinal = toggle ? false : true;
        setToggle(toggleFinal)
        console.log(setToggle)
    }
    const getCheckins = () => {

    }


    return (
        <>
            <Grid container style={{ position: 'absolute' }}>
                <Grid item className='Drawer' md={3} sx={{ backgroundColor: 'white', width: '100%', minHeight: '100vh', display: { xs: 'none', md: 'flex' }, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '3%' }} >
                    <h1>Checkins</h1>

                </Grid>
                <Grid item xs={9} md={9} sx={{ backgroundColor: '#F1F1F1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '90%', height: '90%' }}>
                        <GMap />
                    </div>
                </Grid>
            </Grid>
        </>

    )
}

export default Dashboard