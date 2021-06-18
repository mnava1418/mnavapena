import React from 'react'
import Card from 'react-bootstrap/Card'

class ServiceCard extends React.Component {
    render() {
        return (
            <Card style={{ width: '18rem' }} className="card-shadow card-primary">
                <Card.Header className={`card-header bg-image bg-image-cover ${this.props.section}`} />
                <Card.Body>
                    <Card.Title className="card-primary-title d-flex flex-row justify-content-start align-items-center">
                        <div>
                            <i className={this.props.icon} style={{fontSize: '2rem', marginRight: '8px'}} />
                        </div>
                        <div>
                            {this.props.title}
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