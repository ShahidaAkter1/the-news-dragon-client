import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/1.png';
import second from '../../../assets/2.png';
import third from '../../../assets/3.png';
import moment from 'moment';
import {  FaCalendar} from 'react-icons/fa';

const EditorsInsights = () => {
    return (
        <div className="g-4 mt-4">
              <h2>Editors Insight</h2>
              <Row xs={1} md={2} lg={3} className="g-4 mt-2">
    
    <Col >
      <Card>
        <Card.Img variant="top" src={first} />
        <Card.Body>
          <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
          <Card.Text className='d-flex gap-2'>
          <FaCalendar></FaCalendar>
          <p>{moment().format("dddd, MMMM D, YYYY")}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col >
      <Card>
        <Card.Img variant="top" src={second} />
        <Card.Body>
          <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
          <Card.Text className='d-flex gap-2'>
          <FaCalendar></FaCalendar>
          <p>{moment().format("dddd, MMMM D, YYYY")}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col >
      <Card>
        <Card.Img variant="top" src={third} />
        <Card.Body>
          <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
          <Card.Text className='d-flex gap-2'>
          <FaCalendar></FaCalendar>
          <p>{moment().format("dddd, MMMM D, YYYY")}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

              </Row>
        </div>
       
    );
};

export default EditorsInsights;