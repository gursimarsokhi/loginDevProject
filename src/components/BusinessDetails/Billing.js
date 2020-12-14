import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Row, Col, Dropdown} from 'react-bootstrap';
import RegistrationForm from './RegistrationForm';
import Content from './Content';

const Billing = ({passStep1Validator}) => {
    const [billing, setBilling] = useState({});
    const fetchData = (allBillsData) => {
        setBilling(allBillsData);
        passStep1Validator(billing);
        console.log(billing);
    }
    console.log(billing);
    return(
    <div>
        <Container>
        <Row>
            <Col>
                <Content/> 
            </Col>    
            <Col>
                <RegistrationForm formInfo={fetchData}/>
            </Col>    
        </Row>    
        </Container>        
    </div>
)}
export default Billing