import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar({}) {
  return (
    <div className="navbar">
      <span className="left_header">Save Hospital</span>
      <span className="right_header">Logout</span>
    </div>
  );
}
