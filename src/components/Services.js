import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {serviceInfo} from '../config'

const getServices = () => {
    return (
        <Row xs={1} md={2} lg={3}>
            {serviceInfo.map((service) => {
                return (
                    <Col key={service.id} className="d-flex justify-content-center" style={{padding: '24px'}}>
                        <Card style={{ width: '18rem' }} className="card-shadow card-primary">
                            <Card.Header className={`card-header bg-image bg-image-cover ${service.section}`} />
                            <Card.Body>
                                <Card.Title className="card-primary-title d-flex flex-row justify-content-start align-items-center">
                                    <div>
                                        <i className={service.icon} style={{fontSize: '2rem', marginRight: '8px'}} />
                                    </div>
                                    <div>
                                        {service.title}
                                    </div>
                                </Card.Title>
                                <Card.Text>
                                    {service.text}                                    
                                </Card.Text>
                            </Card.Body>
                        </Card>
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