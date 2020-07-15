import React from 'react';
import Button from "react-bootstrap/Button";

const FooterItem = (props) => {
    return (
        <div>
            <Button className='btn btn-dark'>{props.name}</Button>
        </div>
    )
};

export default FooterItem;