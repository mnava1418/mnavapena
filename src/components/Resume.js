import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ResumeCard from './elements/ResumeCard'
import {educationInfo, workHistoryInfo} from '../config'

const getElements = (title, elements) => {
    return (
        <Row xs={1}>
            <Col className="d-flex justify-content-center"><h2>{title}</h2></Col>
            {elements.map((element) => {
                return (
                    <Col key={element.id} className="d-flex justify-content-center" style={{padding: '16px'}}>                        
                        <ResumeCard title={element.title} subtitle={element.subtitle} text={element.text} />
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
                            {getElements('Work History',workHistoryInfo)}
                        </Col>
                        <Col className="d-flex justify-content-center align-items-start">
                            {getElements('Education', educationInfo)}
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Resume
