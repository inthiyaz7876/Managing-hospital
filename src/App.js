import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './style.css';
import Carousel from './components/Carousel';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResponsiveExample from './components/Table';
import JustifiedExample from './components/Tabs';
import * as adminData from './adminData';
import LeftContainer from './components/LeftContainer';

export default function App() {
  const tabsData = {
    defaultTab: 'StaffSelaries',
    tabsInfo: adminData.default.Financial,
  };
  const testtabs = {};
  const tableData = {
    headers: ['One', 'Two', 'Three', 'Four'],
    data: [
      { one: 'one', two: 'two', three: 'three', four: 'four' },
      { one: 'one1', two: 'two2', three: 'three3', four: 'four4' },
    ],
  };
  const leftMenuAdminData = Object.keys(adminData.default);

  const [tabsText, setTabsText] = useState(adminData.default);
  const [tabsDevider, setTabsDevider] = useState(tabsData);
  useEffect(() => {}, [tabsDevider]);

  console.log('adminData', adminData);

  console.log('jiji', leftMenuAdminData);
  const controllLeftMenu = (e, item) => {
    console.log('clicked', e.target.name);
    testtabs.tabsInfo = tabsText[e.target.name];
    testtabs.defaultTab = testtabs.tabsInfo[0];

    setTabsDevider(testtabs);
  };

  console.log('testtabs', tabsDevider);
  return (
    <div>
      <Navbar />

      <Container fluid>
        <Row style={{ height: '97vh' }}>
          <Col sm={2} className="left_container">
            {leftMenuAdminData.length !== 0 &&
              leftMenuAdminData.map((item) => (
                <LeftContainer
                  leftData={item}
                  onClick={(e, item) => controllLeftMenu(e, item)}
                  color={'info'}
                  classText={'leftMenuButtons'}
                />
              ))}
          </Col>
          <Col sm={10}>
            <JustifiedExample data={tabsDevider} />
            <ResponsiveExample data={tableData} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
