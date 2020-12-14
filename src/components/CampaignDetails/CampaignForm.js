import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Row, Col, Dropdown, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class CampaignForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            client : '',
            campaignName : '',
            campaignStartDate : '',
            campaignEndDate : '',
            potentialClients : [],
            validated : false,
            errors : {
                campaignName : '',
                client : '',
                campaignStartDate : '',
                campaignEndDate : '',
            }
        }
    }
    handleSubmit = () => {
        //event.preventDefault();
        console.log(this.state);
        // this.setState({validated:true});
         this.props.dataTwo(this.state);
    }
    handleChange = event => {
        let nam = event.target.name;
        console.log(nam);
        let val = event.target.value;
        console.log(val);
        const {errors} = this.state;       
        //switch
        switch(nam){
            case 'campaignName':
                errors.campaignName =  val.trim().length == 0 ? 'Enter name here' : '';
                break;
            case 'client':
                errors.client =  val.trim().length == 0 ? 'Enter name here' : '';
                break;
            case 'campaignStartDate':
                errors.campaignStartDate = val.trim().length == 0  ? 'Enter start date number here' : '';
                break;
            case 'campaignEndDate':
                errors.campaignEndDate = val.trim().length == 0 ? 'Enter end date here' : '';
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
    }
    handleClick = event => {
        event.preventDefault();
        //let count = 0;
        let newClient = {person : this.state.client};
        let allClients = [newClient, ...this.state.potentialClients];
        this.state.client && this.setState({potentialClients : allClients});
        //count+=1;
        //console.log(count);
        this.setState({client : ''});
    }
    handleClients = event => {
        event.preventDefault();
        this.setState({client : event.target.value});
    }
  
    render(){
        const {errors} = this.state;
        return(
            <div>
            <Container className="wrapper">
            <Row>
                <Col>
                <Row style={{textAlign:'left'}}><Col><h3>Lets talk about your campaign</h3> Fill in the form below</Col></Row>
                <Form
                // noValidate validated={this.state.validated}
                 onSubmit={this.handleSubmit()}>
                <Row>
                        <Col>
                        <Form.Control required  className="m-2" size="sm" name="campaignName" onChange={this.handleChange} controlId="campaignname" type="campaignname" placeholder="CAMPAIGN NAME"/>
                        {errors.campaignName.length > 0 && <Form.Text style={{color:'red',float:'left'}}>{errors.campaignName}</Form.Text>}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Control required   className="m-2" size="sm" onChange={this.handleChange} name="campaignStartDate" controlId="campainstartdate" type="date" placeholder="CAMPAIGN START DATE"/>
                        {errors.campaignStartDate.length > 0 && <Form.Text style={{color:'red',float:'left'}}>{errors.campaignStartDate}</Form.Text>}
                        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Control required name="campaignEndDate" className="m-2" size="sm" controlId="campaignenddate" onChange={this.handleChange} type="date" placeholder="CAMPAIGN END DATE"/>
                        {errors.campaignEndDate.length > 0 && <Form.Text style={{color:'red',float:'left'}}>{errors.campaignEndDate}</Form.Text>}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={11}>
                        <Form.Control  value={this.state.client} onChange={this.handleChange} name="client" className="m-2" size="sm" controlId="potentialclients" type="text" placeholder="ENTER 5 POTENTIAL CLIENTS"/>
                        {errors.client.length > 0 && <Form.Text style={{color:'red',float:'left'}}>{errors.client}</Form.Text>}
                        </Col>
                        <Col xs={1}>
                        <Button onClick={this.handleClick} style={{marginLeft:-15, marginTop:4}} variant="secondary">+</Button>
                        </Col>
                        
                    </Row> 
                    <Row>
                        <Col style={{textAlign:'left',fontSize:20, marginLeft:15,fontWeight:400}}>
                    <Form.Text>{this.state.potentialClients.length > 0 ? this.state.potentialClients.map( (i,index) => <div key={index}>{i.person}</div>) : null}</Form.Text>
                        </Col>
                    </Row>
                    {/* <Row><Col><Button type="submit">ENTER</Button></Col></Row>  */}
                </Form>
                

                </Col>
                <Col>
                </Col>
            </Row>         
            {/* <Row>
                    <Col><Link to="/"><Button>Previous</Button></Link></Col>
                    <Col><Link to="/budget"><Button>Next</Button></Link></Col>
                </Row> */}
            </Container>
            </div>
        )
    }
}



    

export default CampaignForm