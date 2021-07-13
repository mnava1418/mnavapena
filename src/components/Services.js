import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ServiceCard from './ServiceCard'

class Services extends React.Component {
    getTitle(title) {
        const parts = title.split(' ')

        return (
            <Col className='title'>
                <h1><span className="title-pre">{parts[0]} </span>{parts[1]}</h1>
            </Col>
        )
    }

    getServices(serviceInfo) {
        return (
            <Row xs={1} md={2} lg={3}>
                {serviceInfo.map((service, index) => {
                    return (
                        <Col key={index} className="d-flex justify-content-center" style={{padding: '24px'}}>
                            <ServiceCard section={service.section} icon={service.icon} title={service.title} text={service.text} />
                        </Col>
                    )
                })}
            </Row>
        )
    }

    render() {
        const {info} = this.props
        
        return (
            <section id="services" className="section-primary">               
                <Container>  
                    <Row>
                        {info ? this.getTitle(info.title) : ''}
                    </Row>
                    {info ? this.getServices(info.elements): ''}
                </Container>
            </section>
        )
    }
}

export default Services