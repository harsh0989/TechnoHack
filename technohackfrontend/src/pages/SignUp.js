import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import { useNavigate } from 'react-router';
import Navbar from '../components/Navbar';

const pages = ['News', 'Nearby safe spots'];

function SignUp() {
    const navigate = useNavigate()
    const [list, setList] = useState({ first_name: '', last_name: '', phone_no: '', address: '', password: '', email: '' })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setList({ ...list, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const convert = `${list.phone_no}:${list.password}`
        const token = btoa(convert);
        var formdata = new FormData();
        formdata.append("first_name", list.first_name);
        formdata.append("last_name", list.last_name);
        formdata.append("phone_no", list.phone_no);
        formdata.append("address", list.address);
        formdata.append("email", list.email);
        formdata.append("password", list.password);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://safestree.herokuapp.com/api/register/", requestOptions)
            .then(response => response.json())
            .then(result => {
                localStorage.setItem('token', token)
                if (result.first_name) {
                    navigate('/contactlist')
                }
            })
            .catch(error => console.log('error', error));

    }
    return (
        <>
            <Navbar color={'white'} />
            <Grid container style={{ padding: '15px', width: '100vw', height: '100vh', position: 'relative' }}>
                <Grid item style={{ background: 'linear-gradient(149.06deg, #E02768 5.36%, #C71C7A 85.52%)', width: '100%', height: '100%', borderRadius: '7px' }}>
                    <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%' }}>
                        <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#F1F1F1', width: '60vw', padding: '2%', borderRadius: '3.5px', marginTop: '5%' }}>
                            <Grid item style={{ fontWeight: 'bold', marginBottom: '3%', fontSize: '1.5em', color: '#E02768' }}>Sign Up</Grid>
                            <Grid item style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Grid container spacing={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%' }}>
                                    <Grid item style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', rowGap: '1.5rem' }}>
                                        <Grid container spacing={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                                            <Grid item md={6}>
                                                <TextField required label="First Name" id='first_name' name='first_name' value={list.first_name} style={{ width: '100%' }} onChange={handleChange} autoFocus style={{ width: '100%' }} />
                                            </Grid>
                                            <Grid item md={6}>
                                                <TextField required label="Last Name" id='last_name' name='last_name' value={list.last_name} style={{ width: '100%' }} onChange={handleChange} />
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                                            <Grid item md={6}>
                                                <TextField required label="Phone Number" id='phone_no' name='phone_no' value={list.phone_no} style={{ width: '100%' }} onChange={handleChange} />
                                            </Grid>
                                            <Grid item md={6}>
                                                <TextField label="Address" id='address' name='address' value={list.address} style={{ width: '100%' }} onChange={handleChange} />
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                                            <Grid item md={6}>
                                                <TextField required label="Email" id='email' name='email' value={list.email} style={{ width: '100%' }} onChange={handleChange} />
                                            </Grid>
                                            <Grid item md={6}>
                                                <TextField required label="Password" type='password' id='password' name='password' value={list.password} style={{ width: '100%' }} onChange={handleChange} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <p style={{ textAlign: 'center', fontSize: '0.89rem', color: '#1F2128' }}>Already have an account? <span style={{ cursor: 'pointer', color: '#E02768', fontWeight: 'bold' }} onClick={() => navigate('/login')}>Login</span></p>
                            </Grid>
                            <Grid item style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Button style={{ width: '50%', marginTop: '2%', background: 'linear-gradient(149.06deg, #E02768 5.36%, #C71C7A 85.52%)', color: 'white', fontWeight: '600', fontSize: '1.1em' }} onClick={handleSubmit}>Sign Up</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default SignUp