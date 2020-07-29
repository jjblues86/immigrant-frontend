import React from 'react';
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import picture from '../../../../assets/immigrant.png'

const Story = (props) => {
    return (
        <Auxiliary>
            {<Card border="dark"
                  style={{width: '18rem', display: 'flex'}}
                   className='col-xl-3 col-md-5 col-sm-10 mb-2 ml-5'>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.degree}</Card.Subtitle>
                    <Card.Text style={{fontStyle: 'italic'}}>
                        {props.biography}
                    </Card.Text>
                    <Button variant="primary">Click Me</Button>
                </Card.Body>
            </Card>}
            <br/>
        </Auxiliary>
    )
};

export default Story;