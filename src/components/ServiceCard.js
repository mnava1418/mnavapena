import React from 'react'
import Card from 'react-bootstrap/Card'
import '../styles/Card.css'

class ServiceCard extends React.Component {
    render() {
        return (
            <Card style={{ width: '18rem' }} className="card-shadow card-primary">
                <Card.Body>
                    <Card.Title className="card-primary-title d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <i className={this.props.icon} style={{fontSize: '3rem'}} />
                        </div>
                        <div>
                            <h3>{this.props.title}</h3>
                        </div>
                    </Card.Title>
                    <Card.Text>
                        {this.props.text}                                    
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default ServiceCard