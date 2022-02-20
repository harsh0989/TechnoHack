import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import '../css/FakeCall.css'
import DashboardComp from '../components/DashboardComp';

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}


export default function FakeCall() {
    const [state, setState] = useState({
        open: false,
        Transition: Fade,
    });

    const handleClick = (Transition) => () => {
        var myHeaders = new Headers();
        console.log(`Basic ${localStorage.getItem('token')}`)
        myHeaders.append("Authorization", `Basic ${localStorage.getItem('token')}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://safestree.herokuapp.com/api/fake-call", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (Object.keys(result)[0] === 'success') {
                    console.log(Object.keys(result)[0])
                    setState({
                        open: true,
                        Transition,
                    });
                }
            })
            .catch(error => console.log('error', error));
    };

    const handleClose = () => {
        setState({
            ...state,
            open: false,
        });
    };

    return (
        <>
            <div style={{ padding: '15px', width: '98vw', height: '95vh' }}>
                <DashboardComp color={'#F1F1F1'} />
                <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ background: 'linear-gradient(149.06deg, #E02768 5.36%, #C71C7A 85.52%)', width: '100%', height: '100%', borderRadius: '7px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <p style={{ width: '50vw', textAlign: 'center', color: '#f1f1f1' }}>Tap the button so that we can give a fake call to you and you can escape from places where you don't feel safe</p>
                        <Button onClick={handleClick(SlideTransition)} style={{ fontWeight: 'bold' }} className='fakeCallBtn'>Give Me A Fake Call</Button>
                        <Snackbar
                            open={state.open}
                            onClose={handleClose}
                            TransitionComponent={state.Transition}
                            message="Fake call has been Initiated"
                            key={state.Transition.name}
                            autoHideDuration={2000}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}