import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {educationInfo, workHistoryInfo} from '../config'

const getEducation = () => {
    return (
        <Row xs={1}>
            <Col className="d-flex justify-content-center"><h2>Education</h2></Col>
            {educationInfo.map((element) => {
                return (
                    <Col key={element.id} className="d-flex justify-content-center" style={{padding: '16px'}}>
                        <Card style={{ width: '18rem' }} className="card-shadow card-secondary">
                            <Card.Body>
                                <Card.Title className="card-primary-title d-flex flex-row justify-content-start align-items-center">                                        
                                    {element.title}
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{element.subtitle}</Card.Subtitle>
                                <Card.Text>
                                    {element.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )
}

const getWorkHistory = () => {
    return (
        <Row xs={1}>
            <Col className="d-flex justify-content-center"><h2>Work History</h2></Col>
            {workHistoryInfo.map((element) => {
                return (
                    <Col key={element.id} className="d-flex justify-content-center" style={{padding: '16px'}}>
                        <Card style={{ width: '18rem' }} className="card-shadow card-secondary">
                            <Card.Body>
                                <Card.Title className="card-primary-title d-flex flex-row justify-content-start align-items-center">                                        
                                    {element.title}
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{element.subtitle}</Card.Subtitle>
                                <Card.Text>
                                    {element.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )
}

class Resume extends React.Component {
    render() {
        return (
            <section id="resume" className="section-secondary">
                <Container>  
                    <Row>
                        <Col>
                            <h1><span className="title-pre">Re</span>sume</h1>
                        </Col>
                    </Row>
                    <Row xs={1} md={2}>
                        <Col className="d-flex justify-content-center align-items-start">
                            {getWorkHistory()}
                        </Col>
                        <Col className="d-flex justify-content-center align-items-start">
                            {getEducation()}
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Resume
