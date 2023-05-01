import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import first from '../../assets/1.png';
import second from '../../assets/2.png';
import third from '../../assets/3.png';
import {  FaCalendar} from 'react-icons/fa';
import moment from 'moment';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://the-news-dragon-server-shahidaakter1.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error =>console.log(error))
    },[])

    return (
        <div>
            <h2>All Category</h2>
            <div className='ps-4'>
                {
                    categories.map(category => <p key= {category.id}>
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
                    </p>)
                }
            </div>

            <Row xs={1} className="g-4 mt-2">
    
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

export default LeftNav;