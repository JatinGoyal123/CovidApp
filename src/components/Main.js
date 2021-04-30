import React from "react";
import "./Main.css";
import { Button } from "react-bootstrap";
import {Container, Row, Col} from 'react-bootstrap'
import covid from "./covid.png";
function Main() {
  return (
    <>
         
      <div className="info"> <Container>
            <Row>
        <Col sm={8}>
        <div className="header-info">
          <span className="header">COVID-19</span>
          <p className="header-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
            tempore quam, voluptate architecto alias tenetur ratione labore
            corporis quia sint optio? Ducimus minima error quia. Maiores quos
            eaque officia rerum.
          </p>
          <div className="header-btn ">
            <Button variant="dark">Hello World</Button>&emsp;
            <Button variant="dark">Hello World</Button>
          </div>
        </div>
        </Col>
      </Row>
</Container>
      </div>
      <div className="about-us ">
        <div>
          <p className="about-header">
            <center>About Us</center>
          </p>
          <center>
          <p className="about-content">
            <center>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            amet facilis, accusamus odio laborum sint autem optio sapiente nam
            veniam accusantium natus exercitationem hic iusto, possimus
            molestias saepe. Repudiandae, nam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            amet facilis, accusamus odio laborum sint autem optio sapiente nam
            veniam accusantium natus exercitationem hic iusto, possimus
            molestias saepe. Repudiandae, nam!
            </center>
          </p>
          </center>
        </div>
      </div>
      <Container>
        <Row>
          <Col sm={6}>
      {/* <div className="state-form "> */}
        <div className="state-from-div">
          <h1>
            <center>Find a State!</center>
          </h1>
          <span className="state-span">Choose a State</span>
          <br />
          <select className="category">
            <option value="none" selected>
              choose...
            </option>
            <option value="Laptops">Laptops</option>
            <option value="Mobiles">Mobiles</option>
            <option value="Laptops">Laptops</option>
            <option value="Mobiles">Mobiles</option>
            <option value="Laptops">Laptops</option>
            <option value="Mobiles">Mobiles</option>
          </select>
          <br/>
          <br/>
          <center>
          <Button  variant="secondary">Find State</Button>
          </center>
        </div>
        </Col><Col sm={6}>
        <div>
          <center>
          <img src={covid} width="100%" />
          </center>
        </div>
      {/* </div> */}
      </Col>
      </Row>
      </Container>
    </>
  );
}

export default Main;
