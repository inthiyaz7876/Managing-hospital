import React from 'react';
import Navbar from './components/Navbar';
import './style.css';
import Carousel from './components/Carousel';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResponsiveExample from './components/Table';
import JustifiedExample from './components/Tabs';
import ReactButton from './components/Button';
import * as adminData from './adminData';
export default function App() {
  const tabsData = {
    defaultTab: 'profile',
    tabsInfo: [
      { tabName: 'profile', discription: <h1>Hello Profile</h1> },
      { tabName: 'home', discription: 'Hello Home' },
      { tabName: 'new', discription: <h1>Hello New</h1> },
      { tabName: 'more', discription: <h1>Hello More</h1> },
    ],
  };
  const tableData = {
    headers: ['One', 'Two', 'Three', 'Four'],
    data: [
      { one: 'one', two: 'two', three: 'three', four: 'four' },
      { one: 'one1', two: 'two2', three: 'three3', four: 'four4' },
    ],
  };
  console.log('adminData', adminData);    
  return (
    <div>
      <Navbar />

      <Container fluid>
        <Row style={{ height: '97vh' }}>
          <Col sm={2} className="left_container">
            <ReactButton
              onClick={() => buttonClicked()}
              variant={'info'}
              ButtonName={'Mybutton'}
            />
          </Col>
          <Col sm={10}>
            <JustifiedExample data={tabsData} />
            <ResponsiveExample data={tableData} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
