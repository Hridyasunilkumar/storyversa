import React from "react";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { ShoppingCart } from "react-feather";
const Header = () => {



  return (
    <div className="sj">


<div className="header">
            <div className="logo">
                
            </div>

            <div>
            <Navbar.Brand href="#home">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3e_NIDv38KLz_d5Vv23p2BhPnIjI0tDxDf3zJxGejUNI8O3JKQzNEY2yAluH_faiGtA&usqp=CAU"
              
              

              className="apple"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
            </div>
            <h1 className="ttl">storyverse</h1>
            <nav className="navigation">
                <ul>
                    <li><a href="/">premium</a></li>
                    <li><a href="/">Downloads</a></li>
                    <li><a href="/">categories</a></li>
                    <li><a href="/"></a></li>
                </ul>
            </nav>
           
            <div className="btn">
            <Form className="d-flex">
            <Form.Control

              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="login">Login</Button>
          </Form>
            </div>

        

            {/* <div>
            <DropdownButton id="drp" title="Eng">
      <Dropdown.Item href="#/action-1">malayalam</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Hindi</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Thamil</Dropdown.Item>
    </DropdownButton>
            </div> */}



        </div>


        
    
    </div>


  )
}

export default Header