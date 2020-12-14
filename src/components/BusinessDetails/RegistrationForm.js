import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Row, Col, Dropdown, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CampaignForm from '../CampaignDetails/CampaignForm';
import Content from './Content';


const validWebsiteRegex = RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
}
class RegistrationForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            names : '',
            website : '',
            location : '',
            phonenumber : '',
            category : '',
            validated : false,
            errors: {
                names: '',
                website: '',
                location: '',
                phonenumber: '' 
              }
        }
    }
    handleChange = (event) => {
        //event.preventDefault();
        //const form = event.target.value;
        //if (form.checkValidity() === false) {
          //e.preventDefault();
        //  event.stopPropagation();
        //}
        let nam = event.target.name;
        console.log(nam);
        let val = event.target.value;
        const {errors} = this.state;       
        //switch
        switch(nam){
            case 'names':
                errors.names =  val.trim().length < 3 ? 'Name must have 3 characters' : '';
                break;
            case 'website':
                errors.website = validWebsiteRegex.test(val) ? '':'Enter valid website url';
                break;
            case 'phonenumber':
                errors.phonenumber =  Number(val) && val.trim().length > 0 ? '' : 'Enter phone number here';
                break;
            case 'location':
                errors.location = val.trim().length == 0 ? 'Enter location here' : '';
                break;
        }
        this.setState({errors,[nam]:val}, ()=> {
            console.log(errors);
        })
        console.log(val);
        this.setState({[nam] : val});
        Object.values(errors).every(i => console.log(i));
        const result = !(Object.values(errors).every(i => i===null));
        console.log(result);
        if(!Object.values(errors).every(i => (i===null))) { 
        this.setState({validated : true});
        
    }
    if(this.state.validated === true) {this.props.dataOne(this.state)}; 

    }
    handleSubmit = () => {
        //e.preventDefault();
    // const form = e.currentTarget;
    //     if (form.checkValidity() === false && form.value === '') {
    //       //e.preventDefault();
    //       e.stopPropagation();
    //     }
    // this.setState({validated:true});
    const {errors} = this.state;
    
    console.log(this.state);
    
    console.log(this.state.validated);

    if(this.state.validated){
        //this.setState({[nam] : val});
        console.log(this.state);
    }
    //this.props.formInfo(this.state);
    console.log(Object.values(errors).every(i => (i===null)));
    //Object.keys this.props.dataOne(this.state);
    
    
     
        
    }
    render(){
        console.log(this.state);
        const {errors} = this.state;
        return (
            <div>
                <Container className="wrapper">
                    <Row>
                    <Col><Content/></Col>
                    <Col>
                    <Row size="sm" className="m-2"  >Fill in the form below</Row>
                    <Form 
                    // noValidate validated={this.state.validated} 
                    onSubmit={this.state.validated ? this.handleSubmit() : null}>
                    <Form.Row>
                        <Form.Group as = {Col} controlId="validationCustom01">
                            <Form.Control style={this.state.errors.names.length<0?{background:'#f2dcda'}:{}} required size="sm"  onChange={this.handleChange} name="names"controlId="business-name" type="business-name" placeholder="BUSINESS NAME"/>
                            {errors.names.length > 0 && <Form.Text style={{color:'red',float:'left'}}>{errors.names}</Form.Text>}
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as = {Col} controlId="validationCustom02">
                            <Form.Control  required size="sm" onChange={this.handleChange} name="website" controlId="website" type="website" placeholder="WEBSITE"/>
                            {errors.website.length > 0 && <Form.Text style={{color:'red',float:'left'}}>{errors.website}</Form.Text>}
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as = {Col} controlId="validationCustom03">
                            <Form.Control  required size="sm"  onChange={this.handleChange} name="location" controlId="location" type="location" placeholder="LOCATION"/>
                            {errors.location.length > 0 && <Form.Text style={{color:'red',float:'left'}}>{errors.location}</Form.Text>}
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as = {Col} controlId="validationCustom04">
                            <Form.Control  required size="sm"  onChange={this.handleChange} name="phonenumber" controlId="phone-number" type="phone-number" placeholder="PHONE NUMBER"/>
                            {errors.phonenumber.length > 0 && <Form.Text style={{color:'red',float:'left'}}>{errors.phonenumber}</Form.Text>}
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as = {Col} controlId="validationCustom05">
                            <Form.Control required size="sm"   name="category" as="select" onChange={this.handleChange} custom> 
                            <option name="category1" value="BUSINESS">BUSINESS CATEGORY</option>
                            <option name="category1" value="BUSINESS">BUSINESS CLASS</option>
                                <option name="category2" value="PRIMARY">PRIMARY CLASS</option>
                                <option name="category3" value="SECONDARY">SECONDARY CLASS</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                   <Row>
                        {/* <Col><Button type="submit">ENTER</Button></Col> */}
                    </Row> 
                    </Form>
                    
                    </Col>
                    </Row>
                  
                </Container>
            </div>
        )
    }
    
}

export default RegistrationForm