import React, { useState } from 'react';
import {Container,Navbar, Row, Col, Button, Table} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import FinalTarget from './FinalTarget';
import Seeda from '../Seeda';
import Dashboard from '../Dashboard/Dashboard';

const Congratulations = ({min,max,startDate,name,passData}) => {
    const [show, setShow] = useState(true);
    const lastName = passData.names.split(' ');
    const handleClick = event => {
        setShow(!show);
    }
    return(
    <div>
        {show ? <Seeda/> : 
         <Navbar className="justify-content-end" style={{margin:'10px 0px -75px 0px'}}> 
         <Navbar.Brand href="#home">
        <img
        style={{marginRight:'90%',marginTop:'-6px'}}
        alt=""
        src="https://pixy.org/src/138/thumbs350/1382507.jpg"
        width="50"
        height="50"
        className="d-inline-block align-top"
        />{' '}
     <h2 style={{display:'inline',marginLeft:'90%'}}> XYZ PVT LTD</h2>
    </Navbar.Brand>
    <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    
    </Navbar.Text>
    <Navbar.Text style={{background:'#b0aeae', padding:9, marginRight:15, color:'black', fontWeight:400, borderRadius:'50%'}}> 
        {lastName.length > 1 ? lastName[0][0] : lastName[0]}{lastName.length > 1 ? lastName[1][0] : null} </Navbar.Text>
    <Navbar.Text>
  <Link to="/"> <Button variant="outline-primary">LOGOUT</Button>       </Link>
    </Navbar.Text>
  </Navbar.Collapse>
            </Navbar>

       
    }
        <Container className="wrapper"> 
            <Row style={show ? {} : {display: 'none'}}>
            <Col style={{textAlign:'left'}}>
                <h3 >Congratulations! {name}</h3>
                <p style={{color:'gray'}}>Your campaign has been processed. We will start delivering the first lead within next 24 hours.</p>
               <Button onClick={handleClick} className="left">Go To Dashboard </Button>
            </Col>
            <Col><Table responsive="sm" className="finalContainer" style={{color:'#6E6E6E'}}>
            <tbody>
            <tr><td >Leads per day</td><td style={{color: '#2B676B',fontSize: '19px', fontWeight:600}}>{passData.min} - {passData.max}</td></tr>
            <tr><td >Daily Budget</td><td style={{color: '#2B676B',fontSize: '19px', fontWeight:600}}>{passData.budget}</td></tr>
            <tr><td>Cost per lead</td><td style={{color: '#2B676B',fontSize: '19px', fontWeight:600}}>$2.5 - $5</td></tr>
            <tr><td>Start date</td><td style={{color: '#2B676B',fontSize: '19px', fontWeight:600}}>{passData.campaignStartDate}</td></tr>
            <tr><td>End date</td><td style={{color: '#2B676B',fontSize: '15px', fontWeight:600}}>No end date</td></tr>
            </tbody>
            
        </Table></Col>
            </Row>
            <Row style={show ?  {display: 'none'} : {}}><Dashboard data={passData}/></Row>
        </Container>
    </div>
    )}
export default Congratulations