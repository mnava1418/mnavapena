import React from 'react'
import Card from 'react-bootstrap/Card'

class ResumeCard extends React.Component {
    render() {
        return (
            <Card style={{ width: '18rem' }} className="card-shadow card-secondary">
                <Card.Body>
                    <Card.Title className="card-primary-title d-flex flex-row justify-content-start align-items-center">                                        
                        {this.props.title}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.subtitle}</Card.Subtitle>
                    <Card.Text>
                        {this.props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default ResumeCard