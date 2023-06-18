import React from 'react';
import Navbar from './components/Navbar';
import './style.css';
import Carousel from './components/Carousel';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div>
      <Navbar />

      <Container fluid>
        <Row>
          <Col sm={1} className="left_container">
            <button>OP section</button>
          </Col>
          <Col sm={11}>
            <Carousel />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
