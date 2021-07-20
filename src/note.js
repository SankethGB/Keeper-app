import React from 'react'
import { Col, Card, CardText, CardHeader } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';


function note(props) {
    return (
        <div className="container">
            
            <Col sm='10' className="mt-4">
                <CardHeader tag='h6' className='text-white' style={{ backgroundColor: '#FFC300',width:'220px'}} >{props.title}</CardHeader>
          <Card className="card" body >
          
          <CardText style={{ fontSize: '14px' }}>{props.description}</CardText>
          
        </Card></Col>
        </div>
    )
}

export default note
