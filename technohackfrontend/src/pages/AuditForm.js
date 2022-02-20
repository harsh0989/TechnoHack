import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import logo from '../images/logo2.png'
import { useNavigate } from 'react-router';

const pages = ['News', 'Nearby safe spots'];


function AuditForm() {
    const navigate = useNavigate()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [list, setList] = useState({lighting:'', openness:'', visibility:'', people:'', security:'', walkpath:'',public_transportation:'',public_usage:'',feeling:''})
    const[show,setShow] = useState(false)
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setList({ ...list, [name]: value })
      }

      

      const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
  return (
    <>
    <AppBar position="static" sx={{ position: 'absolute', zIndex: '10', backgroundColor: 'transparent', padding: '25px', boxShadow: 'none' }}>
                <Container maxWidth="xl" sx={{ backgroundColor: 'transparent' }}>
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <img src={logo} style={{ mr: 2, display: { xs: 'none', md: 'flex' } }}></img>
                        </Typography>


                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <img src={logo} style={{ mr: 2, display: { xs: 'none', md: 'flex' } }}></img>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
           
    <Grid container style={{backgroundColor:'#e02768', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Grid item style={{backgroundColor:'white', padding:'50px',marginTop:'120px', marginBottom:'40px',borderRadius:'7px'}}>
        <p style={{ textAlign: 'center', fontSize: '0.89rem', color: '#1F2128' }}>Rate every factors on the scale of <span style={{ cursor: 'pointer', color: '#E02768', fontWeight: 'bold' }} onClick={() => navigate('/login')}>1-10</span></p>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', columnGap:'40px', marginBottom:'20px'}}>
            <Grid container md={6}>
                <TextField required type='number' label="Lighting" id='lighting' name='lighting' value={list.lighting} autoFocus style={{ width: '100%' }} onChange={handleChange} />
            </Grid>
            <Grid container md={6}>
                <TextField required type='number' label="openess" id='openness' name='openness' value={list.openness} autoFocus style={{ width: '100%' }} onChange={handleChange} />
            </Grid>
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', columnGap:'40px', marginBottom:'20px'}}>
            <Grid container md={6}>
                <TextField required type='number' label='visibility' id='visibility' name='visibility' value={list.visibility} autoFocus style={{ width: '100%' }} onChange={handleChange} />
            </Grid>
            <Grid container md={6}>
                <TextField required type='number' label='people' id='people' name='people' value={list.people} autoFocus style={{ width: '100%' }} onChange={handleChange} />
            </Grid>
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', columnGap:'40px', marginBottom:'20px'}}>
            <Grid container md={6}>
                <TextField required type='number' label='security' id='security' name='security' value={list.security} autoFocus style={{ width: '100%' }} onChange={handleChange} />
            </Grid>
            <Grid container md={6}>
                <TextField required type='number' label='walkpath' id='walkpath' name='walkpath' value={list.walkpath} autoFocus style={{ width: '100%' }} onChange={handleChange} />
            </Grid>
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', columnGap:'40px', marginBottom:'20px'}}>

            <Grid container md={6}>
                <TextField required type='number' label='public_transportation' id='public_transportation' name='public_transportation' value={list.public_transportation} autoFocus style={{ width: '100%' }} onChange={handleChange} />
            </Grid>
            <Grid container md={6}>
                <TextField required type='number' label='public_usage' id='public_usage' name='public_usage' value={list.public_usage} autoFocus style={{ width: '100%' }} onChange={handleChange} />
            </Grid>
            </div>
            <Grid container>
                <TextField required type='number' label='feeling' id='feeling' name='feeling' value={list.feeling} autoFocus style={{ width: '100%' }} onChange={handleChange} />
            </Grid>
            <Grid item style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Button style={{ width: '50%', marginTop: '2%', background: 'linear-gradient(149.06deg, #E02768 5.36%, #C71C7A 85.52%)', color: 'white', fontWeight: '600', fontSize: '1.1em' }} onClick={() => setShow(!show)}>Submit</Button>
                            </Grid>
                            {show?<p>The safety score is 5</p> : ''}
        </Grid>
    </Grid>
    </>
  )
}

export default AuditForm