import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../assets/bg1.png';

const RightNav = () => {
    return (
        <div>
           <div>
           <h2 className='my-4'>Login With</h2>
            <Button className='my-2' variant="outline-primary">  <FaGoogle /> Login with Google</Button><br/>
             <Button  variant="outline-secondary"> <FaGithub /> Login with Github</Button>
           </div>
           <div>
            <h2 className='my-4'>Find us on</h2>
            <ListGroup>
                <ListGroup.Item><FaFacebook />Facebook</ListGroup.Item>
                <ListGroup.Item><FaTwitter/>Twitter</ListGroup.Item>
                <ListGroup.Item><FaInstagram />Instagram</ListGroup.Item>
             </ListGroup>
           </div>
           <QZone></QZone>
           <div>
            <img src={bg} alt="" />
           </div>
        </div>
    );
};

export default RightNav;