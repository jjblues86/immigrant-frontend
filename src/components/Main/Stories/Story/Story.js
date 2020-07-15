import React from 'react';
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";
import Card from "react-bootstrap/Card";

const Story = (props) => {
    return (
        <Auxiliary>
            <Card border="dark"
                  style={{width: '18rem', display: 'flex'}}
                  className='col-xl-3 col-lg-3 col-md-5 col-sm-10 mb-2 ml-5'>
                <Card.Header style={{fontWeight: 'bold'}}>{props.name}</Card.Header>
                <Card.Body>
                    <Card.Text style={{fontStyle: 'italic'}}>
                        {props.content}
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
        </Auxiliary>
    )
};

export default Story;