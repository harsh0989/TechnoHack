import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import { useNavigate } from 'react-router';
import DashboardComp from '../components/DashboardComp';

const pages = ['News', 'Nearby safe spots'];


function AuditForm() {
    const navigate = useNavigate()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [list, setList] = useState({ lighting: '', openness: '', visibility: '', people: '', security: '', walkpath: '', public_transportation: '', public_usage: '', feeling: '' })
    const [show, setShow] = useState(false)
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setList({ ...list, [name]: value })
    }

    return (
        <>
            <DashboardComp color={'#F1F1F1'} />
            <Grid container style={{ backgroundColor: '#e02768', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', width: '100%' }}>
                <Grid item style={{ backgroundColor: 'white', padding: '50px', marginTop: '120px', marginBottom: '40px', borderRadius: '7px' }}>
                    <p style={{ textAlign: 'center', fontSize: '0.89rem', color: '#1F2128' }}>Rate every factors on the scale of <span style={{ cursor: 'pointer', color: '#E02768', fontWeight: 'bold' }} onClick={() => navigate('/login')}>1-10</span></p>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '40px', marginBottom: '20px' }}>
                        <Grid container md={6}>
                            <TextField required type='number' label="Lighting" id='lighting' name='lighting' value={list.lighting} autoFocus style={{ width: '100%' }} onChange={handleChange} />
                        </Grid>
                        <Grid container md={6}>
                            <TextField required type='number' label="openess" id='openness' name='openness' value={list.openness} style={{ width: '100%' }} onChange={handleChange} />
                        </Grid>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '40px', marginBottom: '20px' }}>
                        <Grid container md={6}>
                            <TextField required type='number' label='visibility' id='visibility' name='visibility' value={list.visibility} style={{ width: '100%' }} onChange={handleChange} />
                        </Grid>
                        <Grid container md={6}>
                            <TextField required type='number' label='people' id='people' name='people' value={list.people} style={{ width: '100%' }} onChange={handleChange} />
                        </Grid>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '40px', marginBottom: '20px' }}>
                        <Grid container md={6}>
                            <TextField required type='number' label='security' id='security' name='security' value={list.security} style={{ width: '100%' }} onChange={handleChange} />
                        </Grid>
                        <Grid container md={6}>
                            <TextField required type='number' label='walkpath' id='walkpath' name='walkpath' value={list.walkpath} style={{ width: '100%' }} onChange={handleChange} />
                        </Grid>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '40px', marginBottom: '20px' }}>

                        <Grid container md={6}>
                            <TextField required type='number' label='public_transportation' id='public_transportation' name='public_transportation' value={list.public_transportation} style={{ width: '100%' }} onChange={handleChange} />
                        </Grid>
                        <Grid container md={6}>
                            <TextField required type='number' label='public_usage' id='public_usage' name='public_usage' value={list.public_usage} style={{ width: '100%' }} onChange={handleChange} />
                        </Grid>
                    </div>
                    <Grid container>
                        <TextField required type='number' label='feeling' id='feeling' name='feeling' value={list.feeling} style={{ width: '100%' }} onChange={handleChange} />
                    </Grid>
                    <Grid item style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button style={{ width: '50%', marginTop: '2%', background: 'linear-gradient(149.06deg, #E02768 5.36%, #C71C7A 85.52%)', color: 'white', fontWeight: '600', fontSize: '1.1em' }} onClick={() => setShow(!show)}>Submit</Button>
                    </Grid>
                    {show ? <p>The safety score is 5</p> : ''}
                </Grid>
            </Grid>
        </>
    )
}

export default AuditForm