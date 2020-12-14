import React, { useState } from 'react';
import '../../src/content.css';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import RegistrationForm from './BusinessDetails/RegistrationForm';
import CampaignForm from './CampaignDetails/CampaignForm';
import Budget from './Targets/Budget';
import Billing from './BusinessDetails/Billing'; 
import Congratulations from './Targets/Congratulations';
import PaymentForm from './Targets/PaymentForm';
import Dashboard from './Dashboard/Dashboard';
import Seeda from './Seeda';
class Timeline extends  React.Component {
    constructor(props){
      super(props);
      this.state = {
        data : {},
        finalOne : false,
        finalTwo : false,
        finalThree : false,
        finalFour : false,
        final : true,
        min: 0,
        max: 0,
      }
    }

    fetchDataOne = (d) => {
      console.log("data",d);
      if(Object.entries(d).length !== 0) {
        this.setState({finalOne : true});
        let resultDataOne = {...d,...this.state.data};
        console.log(resultDataOne);
        this.setState({data : resultDataOne});
        console.log(this.state.data);
      }
      
    }
    step1Validator = () => {   
      console.log(this.state);
      return this.state.finalOne;
    }
    fetchDataTwo =(c) => {
      console.log('campaign', c);
      if(Object.entries(c).length > 0) { 
        this.setState({finalTwo : true});
        let resultDataTwo = {...c,...this.state.data};
        console.log(resultDataTwo);
        this.setState({data : resultDataTwo});
        console.log(this.state.data);}
    }
    step2Validator= () => {
        console.log(this.state.data);
        return this.state.finalTwo;
      }
    
    fetchDataThree = (l) => {
      console.log(l);
      const min = l.min;
      const max = l.max;
      console.log(min,max);
      if(Object.keys(l).length > 0){ 
        this.setState({finalThree:true});
        let resultDataThree = {...l,...this.state.data};
        this.setState({data : resultDataThree});
        this.setState({min : min});
        this.setState({max : max});
        console.log(this.state.data);}
    }
    step3Validator = () => {
        return this.state.finalThree;
      }
    fetchDataFour = payment => {
      console.log(payment);
      if(Object.keys(payment).length !== 0){
      let paymentData = {...payment, ...this.state.data};
      this.setState({data:paymentData});
      console.log(this.state.data);
      this.setState({finalFour : true});
    }
    }
    step4Validator() {
        return this.state.finalFour;
      }
    onFormSubmit = () => {
        // handle the submit logic here
        // This function will be executed at the last step
        // when the submit button (next button in the previous steps) is pressed\

        console.log(this.state);
        this.setState({final : !this.state.final});
        return (this.state.finalFour);
      }
    render(){
      const step1Content = <RegistrationForm dataOne={this.fetchDataOne}/>;
      const step2Content = <CampaignForm dataTwo={this.fetchDataTwo}/> ;
      const step3Content = <Budget passDate = {this.state.data.campaignStartDate} dataThree={this.fetchDataThree}/>;
      const step4Content = <PaymentForm data={this.state.data} dataFour={this.fetchDataFour}/>;
      const styles = {background:'red'};
      return(<>
    {this.state.final ? 
 <div className="timeline" style={this.state.final ? {} :{display : "none"} }>
      <Seeda/> 

        <StepProgressBar
          //style={{color:'gray'}}
          startingStep={0}
          onSubmit={this.onFormSubmit} 
          steps={[
        {
          label: 'Business Details',
          //subtitle: '10%',
          name: 'step 1',
          content: step1Content,
          validator: this.step1Validator
        },
        {
          label: 'Campaign Details',
          //subtitle: '50%',
          name: 'step 2',
          content: step2Content,
          validator: this.step2Validator
        },
        {
          label: 'Target and Budget',
          //subtitle: '100%',
          name: 'step 3',
          content: step3Content,
          validator: this.step3Validator
        },
        {
          label: 'Delivery and Payment',
          //subtitle: '100%',
          name: 'step 4',
          content: step4Content,
          validator: this.step4Validator
        }
       
        ]}
        wrapperClass={styles}
    />    
  </div>: <Congratulations passData={this.state.data} name={this.state.data.names} startDate={this.state.data.campaignStartDate} min={this.state.min} max={this.state.max}/>}
  </>
)}
}

export default Timeline