import { Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
function SafetySpots() {

  const [center, setCenter] = useState({ lat: '', lon: '' })
  const [field, setField] = useState({ filter: 'all' });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }, [navigator.geolocation])

  function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude);
    setCenter({ lat: position.coords.latitude, lon: position.coords.longitude });
  }

  const handleSearchChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setField({ ...field, [name]: value })
  }

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   setbutton(Math.random());
  // }

  // useEffect(() => {
  //   setLoading(true);
  //   var requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow',
  //     headers: {
  //       'Access-Control-Allow-Origin': "*",
  //     },
  //   };

  //   fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${field.filter}&app_id=${API_ID}&app_key=${API_KEY}`, requestOptions)
  //     .then(response => response.json())
  //     .then(result => {
  //       setList(result.hits);
  //       setLoading(false);
  //     })
  //     .catch(error => console.log('error', error));
  // }, [button])

  return (
    <>
      <Paper>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          // onChange={handleSearchChange}
          // value={field.filter}
          placeholder="Are you craving for Something? Find it here!"
          id="filter" name="filter" label="Filter"
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search"
        // onClick={handleSearch}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  )
}

export default SafetySpots