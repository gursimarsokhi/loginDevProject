import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Row, Col,Button, Dropdown} from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import FinalTarget from './FinalTarget';
import InputRange from 'react-input-range';
import PaymentForm from './PaymentForm';
const Budget = ({passDate,dataThree}) => {
    const [value, setValue] = useState(0);
    const [minLeads, setMinLeads] = useState(0);
    const [maxLeads, setMaxLeads] = useState(0);
    const [leads, setLeads] = useState({});
    const handleChange = (event) => {
        console.log(value);
        setValue(event.target.value);
        console.log('hello world', value);
    }
    
    const handleAfterChange = e => {
        setMinLeads(value*0.2);
        setMaxLeads(value*0.4);
        
        
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const finalLeads = {min: minLeads, max: maxLeads, budget : value};
        console.log(finalLeads);
        setLeads({...finalLeads});
        console.log(leads);
        dataThree(finalLeads);
        
    }
    return(
    <div>
        <Container className="wrapper">  
            {/* {Object.keys(leads).length === 0 ?  */}
            <Row>
                <Col>
                    <h3  style={{textAlign:'left'}}>Let's talk about your budgets</h3>
                    <p  style={{textAlign:'left',color:'#6E6E6E'}}>Fill in the form below</p>
                  
                     <Form onSubmit={handleSubmit}> 
                        <RangeSlider
                        min={0}
                        max={200}
                        className="slider" 
                        name="slider"
                        value={value}
                        onChange={(event)=>handleChange(event)}
                        onAfterChange={(e)=>handleAfterChange(e)}
                        // tooltip={touched ? 'off' : 'on'}
                        step={10}
                        />     
                          <Button  type="submit">ENTER</Button>  
                        </Form> 
                    
                </Col>
                <Col>
                    <FinalTarget date={passDate} minLeads={minLeads} maxLeads={maxLeads}/>
                </Col>
               
            </Row>
             {/* :
             <PaymentForm passLeads={leads}/>} */}
        </Container>
        
    </div>
)}
export default Budget