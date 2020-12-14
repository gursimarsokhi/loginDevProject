import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Row, Col, Dropdown, Button, Table} from 'react-bootstrap';
import FinalTarget from './FinalTarget';

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class PaymentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      creditCardNumber : '',
      expiryDate : '',
      cvv : '',
      emailMe : '',
      crm : '',
      validated : false,
      errors : {cvv : '', emailMe : '', creditCardNumber : '', expiryDate : '', crm : ''}
    }
  }
  handleChange = (event) => {
    const nam = event.target.name;
    const val = event.target.value;
    const {errors} = this.state;
    switch (nam) {
      case 'creditCardNumber' :
        errors.creditCardNumber = !Number(val) || val.length !== 16 ? 'Enter valid credit card number' : '';
        break;
        case 'expiryDate' : 
        errors.expiryDate = val.length == 0 ? 'Enter expiry date' : '';
        break;
        case 'cvv' : 
        errors.cvv = !Number(val) || val.length !==3 ? 'Invalid CVV' : '';
        break;
        case 'emailMe' : 
        errors.emailMe = validEmailRegex.test(val) ? '' : 'Invalid email!';  
        break;
        case 'crm' : 
        errors.crm = (val.length == 0) ? 'Enter value here' : '';  
        break;
    }
    console.log(val)
    this.setState({errors, [nam]:val}, ()=> {
      console.log(errors);
  });

    if(!(Object.values(errors).every(i => i===null))){ 
      this.setState({validated : true})  
      this.setState({[nam]:val})}
    if(this.state.validated){
    //    this.setState({[nam] : val});
        console.log(this.state);
    }
    //this.props.formInfo(this.state);
    console.log(this.state);
    //Object.keys this.props.dataOne(this.state);
    if(this.state.validated) { this.props.dataFour(this.state)};
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    
    //this.props.dataFour(this.state);
    }
    render(){
    //console.log(this.state.datas.campaignStartDate);
      const {campaignStartDate, min, max, budget} = this.props.data;
      console.log(this.props);
      const {errors}=this.state;
    return (
        <div>
            <Container className="wrapper">
                <Row>
                    <Col>
                    <Row><h3>Just a few more details, before you are live</h3><p style={{color:"gray"}}>Fill in the form below. You will be charged at the end of the day</p></Row>
                    <Row>
                    <Form 
                    // noValidate validated={this.state.validated}
                     onSubmit={this.handleSubmit}>
                    <Form.Row>
                      <Form.Group xs={6} as={Col} controlId="formGridcredit">
                        <Form.Control required size="sm" onChange={this.handleChange} type="text" name="creditCardNumber" placeholder="CREDIT CARD NUMBER" />
                        {errors.creditCardNumber.length > 0 && <Form.Text style={{color:'red',float:'left'}}>{errors.creditCardNumber}</Form.Text>}

                      </Form.Group>

                      <Form.Group xs={4} as={Col} controlId="formGridExpiry">
                        <Form.Control required size="sm" onChange={this.handleChange} name="expiryDate" type="date" placeholder="EXPIRY DATE" />
                        {errors.expiryDate.length > 0 && <Form.Text style={{color:'red',float:'left'}}>{errors.expiryDate}</Form.Text>}
                      </Form.Group> 
                      
                      <Form.Group xs={2} as={Col} controlId="formGridCvv">
                        <Form.Control required type="password" onChange={this.handleChange} size="sm" name="cvv" placeholder="CVV" />
                        {errors.cvv.length > 0 && <Form.Text style={{color:'red',float:'left'}}>{errors.cvv}</Form.Text>}
                      </Form.Group>
                    </Form.Row>
                    <Form.Row><p style={{color:"gray"}}>How would you like to receive the leads</p></Form.Row>
                    <Form.Row>
                      <Form.Group xs={3} as={Col} controlId="formGridMail">
                        <Form.Control required onChange={this.handleChange} type="email" size="sm" name="emailMe" placeholder="EMAIL ME"/>
                        {errors.emailMe.length > 0 && <Form.Text style={{color:'red',float:'left'}}>{errors.emailMe}</Form.Text>}
                      </Form.Group>
                      <Form.Group xs={4} as={Col} controlId="formGridCrm">
                        <Form.Control required  size="sm" name="crm" onChange={this.handleChange} placeholder="CONNECT TO MY CRM"/>
                        {errors.crm.length > 0 && <Form.Text style={{color:'red',float:'left'}}>{errors.crm}</Form.Text>}
                      </Form.Group>
                    </Form.Row>
                    {/* <Form.Row><Button type="submit">ENTER</Button></Form.Row> */}
                  </Form>
                </Row>
              </Col>
              <Col><div>
        <Table responsive="sm" className="targetContainer" style={{color:'#6E6E6E'}}>
            <tbody>
            <tr><td >Leads per day</td><td style={{color: '#2B676B',fontSize: '19px', fontWeight:600}}>{min} - {max}</td></tr>
            <tr><td >Daily Budget</td><td style={{color: '#2B676B',fontSize: '19px', fontWeight:600}}>{budget}</td></tr>
            <tr><td>Cost per lead</td><td style={{color: '#2B676B',fontSize: '19px', fontWeight:600}}>$2.5 - $5</td></tr>
            <tr><td>Start date</td><td style={{color: '#2B676B',fontSize: '19px', fontWeight:600}}>{campaignStartDate}</td></tr>
            <tr><td>End date</td><td style={{color: '#2B676B',fontSize: '15px', fontWeight:600}}>No end date</td></tr>
            </tbody>
            
        </Table>
    </div></Col>
            </Row>   
          </Container>
        </div>
    )}
}

export default PaymentForm