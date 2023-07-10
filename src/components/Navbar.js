import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ReactNavbar({}) {
  return (
    <div className="navbar">
      <span className="left_header"><button>Logo</button>Save Life Hospital</span>
      <span className="right_header">{new Date().toLocaleString()}<Button variant='info'>Logout</Button></span>
    </div>
  );
}
