import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ServiceCard from './elements/ServiceCard'
import {serviceInfo} from '../config'

const getServices = () => {
    return (
        <Row xs={1} md={2} lg={3}>
            {serviceInfo.map((service) => {
                return (
                    <Col key={service.id} className="d-flex justify-content-center" style={{padding: '24px'}}>
                        <ServiceCard section={service.section} icon={service.icon} title={service.title} text={service.text} />
                    </Col>
                )
            })}
        </Row>
    )
}

class Services extends React.Component {
    render() {
        return (
            <section id="services" className="section-primary">               
                <Container>  
                    <Row>
                        <Col>
                            <h1><span className="title-pre">My </span>services</h1>
                        </Col>
                    </Row>
                    {getServices()}
                </Container>
            </section>
        )
    }
}

export default Services