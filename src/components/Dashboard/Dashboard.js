import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Dashboard = ({data}) => {
    return(
        <div>
            <Container style={{padding:100, marginTop:-70}}>
                <Row>
                    <Col>
                    <Row><h1>{data.campaignName}</h1>
                    <h5 style={{fontWeight:400,color:'gray', textAlign:'left'}}>Your campaign has been processed. We will start delivering the first leads within next 24 hours.</h5></Row>
                    <Row>
                        <Form>
                        <Row>
                        <Col>
                        <Form.Control controlId="location" type="date" placeholder="CAMPAIGN START DATE"/>
                        </Col>
                   
                        <Col>
                        <Form.Control controlId="location" type="date" placeholder="CAMPAIGN END DATE"/>
                        </Col>
                        </Row>
                        </Form>
                    </Row>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                   
                        <img className="image-box" src="https://static-cse.canva.com/_next/static/assets/header-background.file.2110b3f43d64c1f08592c5a4aad64a52.svg" alt="img"/>
                </Row><Row>
                        <img className="image-box" src="https://static-cse.canva.com/_next/static/assets/header-background.file.2110b3f43d64c1f08592c5a4aad64a52.svg" alt="img"/>
                </Row><Row>
                        <img className="image-box" src="https://static-cse.canva.com/_next/static/assets/header-background.file.2110b3f43d64c1f08592c5a4aad64a52.svg" alt="img"/>
                </Row>
            </Container>
        </div>
    )
}
export default Dashboard