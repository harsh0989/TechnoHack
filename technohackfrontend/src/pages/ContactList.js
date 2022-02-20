import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useHistory } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import logo from '../images/pinkLogo2.png'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Navbar from '../components/Navbar';

const button = {
    marginLeft: '-1vw',
    alignItems: 'center',
    width: '44vw',
    backgroundColor: '#0950D5',
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    height: '56px',
    marginTop: '2%',
    marginBottom: '2%'
}

const AddBtn = {
    color: '#88898F', height: '80%', alignItems: 'center', background: 'linear-gradient(149.06deg, #E02768 5.36%, #C71C7A 85.52%)',
    color: '#FFFFFF',
    fontFamily: 'Poppins',
}

const pages = ['News', 'Nearby safe spots'];

function ContactList() {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            background: '#E02768',
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: '#F1F1F1',
        },
        '&:nth-of-type(even)': {
            backgroundColor: '#EBEBEB',
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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


    const [list, setList] = useState({ name: '', relation: '', phonenumber: '' });
    const [people, setPeople] = useState([]);
    const [editSinglePerson, setEditSinglePerson] = useState('Add');

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setList({ ...list, [name]: value })
    }

    const addToList = (e) => {
        e.preventDefault();
        let price = parseInt(list.amount)
        if (list.name && list.relation && list.phonenumber) {
            const newPerson = { ...list, id: new Date().getTime().toString() };
            setPeople([...people, newPerson]);
            setList({ name: '', relation: '', phonenumber: '' })
            setEditSinglePerson('Add');
        }

    }

    const deletePerson = (id) => {
        const newList = people.filter((singleItems) => singleItems.id !== id);
        setPeople(newList);
    }


    const editPerson = (id) => {
        setEditSinglePerson('Edit');
        const filteredPeople = people.filter(filterItem => filterItem.id !== id);
        const selectedPeople = people.find(findItem => findItem.id === id);
        console.log(selectedPeople);
        setList({ name: selectedPeople.name, relation: selectedPeople.relation, phonenumber: selectedPeople.phonenumber })
        setPeople(filteredPeople);
    }

    const postContactList = (e) => {
        var myHeaders = new Headers();
        myHeaders.append("name", list.name);
        myHeaders.append("relation", list.relation);
        myHeaders.append("phone_no", list.phonenumber);
        myHeaders.append("fav", "false");
        myHeaders.append("Authorization", "Basic KzkxNzUwNjE2MDc1NzpoYXJzaEAxMjM=");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://safestree.herokuapp.com/api/guardians/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <Navbar color={'#E02768'} />
            <div>
                <div className="createList" style={{ width: '100vw', marginTop: '2%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Card sx={{ width: '90vw', padding: '2%' }}>
                        <CardContent>
                            <p style={{ fontFamily: 'Readex Pro, sans-serif', fontWeight: '800', color: '#E02768', textAlign: 'center', fontSize: '1.5em' }}>Guardian  Contacts</p>

                            <Grid container spacing={3} columns={12}>
                                <Grid item md={3} xs={12}>
                                    <TextField margin="normal" sx={{ width: '95%', fontFamily: 'Readex Pro, sans-serif' }} required id="name" label="Name" name="name" value={list.name} onChange={handleChange} />
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <TextField margin="normal" sx={{ width: '95%', fontFamily: 'Readex Pro, sans-serif' }} required id="relation" label="Relation" name="relation" value={list.relation} onChange={handleChange} />
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <TextField margin="normal" sx={{ width: '95%', fontFamily: 'Readex Pro, sans-serif' }} required id="phonenumber" label="Phone No.:" name="phonenumber" value={list.phonenumber} onChange={handleChange} />
                                </Grid>
                                <Grid item md={3} mt={2} xs={12} >
                                    <Button onClick={addToList} style={AddBtn} sx={{ width: '100%', backgroundColor: '#E02768' }}>{editSinglePerson}</Button>
                                </Grid>
                            </Grid>
                            <p style={{ fontFamily: 'Readex Pro, sans-serif', fontWeight: '800', color: '#454C59' }}>Your Transactions</p>

                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell style={{ fontWeight: 'bolder' }}>Name</StyledTableCell>
                                            <StyledTableCell align="right" style={{ fontWeight: 'bolder' }}>Relation</StyledTableCell>
                                            <StyledTableCell align="right" style={{ fontWeight: 'bolder' }}>Phone Number</StyledTableCell>
                                            <StyledTableCell align="right" style={{ fontWeight: 'bolder' }}>Edit Options</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {people.map((singlePerson) => (
                                            <StyledTableRow key={singlePerson.id}>
                                                <StyledTableCell component="th" scope="row">
                                                    {singlePerson.name}
                                                </StyledTableCell>
                                                <StyledTableCell align="right">{singlePerson.relation}</StyledTableCell>
                                                <StyledTableCell align="right">{singlePerson.phonenumber}</StyledTableCell>
                                                <StyledTableCell align="right">
                                                    <Grid container style={{ display: 'flex', columnGap: '2%', justifyContent: 'flex-end' }}>

                                                        <Grid item>
                                                            <DeleteIcon style={{ cursor: 'pointer', color: '#B5DD43' }} onClick={() => deletePerson(singlePerson.id)} />
                                                        </Grid>
                                                        <Grid item>
                                                            <EditIcon style={{ cursor: 'pointer', color: '#DD4343' }} onClick={() => editPerson(singlePerson.id)} />
                                                        </Grid>
                                                    </Grid>
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <h5 style={{ textAlign: 'right', color: '#E02768', cursor: 'pointer' }} onClick={postContactList}>Confirm & Proceed</h5>
                        </CardContent>
                    </Card>
                </div>
            </div >
        </>
    )
}

export default ContactList


