import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from '@mui/icons-material/Menu'
import icon1 from '../images/SafetyAudit.png'
import icon2 from '../images/Loc.png'
import icon3 from '../images/News.png'
import icon4 from '../images/Safe.png'
import { useState } from "react";
import { useNavigate } from "react-router";


export default function Dashboard() {
  let navigate= useNavigate();
  const [state, setState] = React.useState({
    left: false
  });
  let [value, setValue] = useState({ link: '', phone_no: '' })



  const [show, setShow] = useState(false)
  const shareLocation = () => {

    console.log("first")
    var axios = require('axios');
    let data = { 'link': 'https://localhost:3000/tracker' }
    console.log(data)
    var config = {
      method: 'post',
      url: 'https://safestree.herokuapp.com/api/share-location',
      headers: {
        ...data.getHeaders()
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });


  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key='Safety Audit' onClick={()=>navigate(`/auditform`)}>
          <ListItemIcon>
            <img src={icon1} />
          </ListItemIcon>
          <ListItemText primary='Safety Audit' />
        </ListItem>
        <ListItem button key='Share Location' onClick={shareLocation}>
          <ListItemIcon>
            <img src={icon2} />
          </ListItemIcon>
          <ListItemText primary='Share Location' />
        </ListItem>
        <ListItem button key='Daily News' onClick={()=>navigate(`/news`)}>
          <ListItemIcon>
            <img src={icon3} />
          </ListItemIcon>
          <ListItemText primary='Daily News' />
        </ListItem>
        <ListItem button key='Nearby Safe Spots'>
          <ListItemIcon>
            <img src={icon4} />
          </ListItemIcon>
          <ListItemText primary='Nearby Safe Spots' />
        </ListItem>
        <ListItem button key='call' onClick={() => setShow(!show)}>
          <ListItemText primary='Fake Call'  />
          {show ? <p>Fake call has been initiated</p>:''}
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
          <Drawer
            anchor="left"
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
