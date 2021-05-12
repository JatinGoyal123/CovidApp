import React, { useState, useEffect } from "react";
import { Button, Container, Form, Row, Col, Table } from "react-bootstrap";
import axios from "axios";
function UserDashboard() {
  const [state, setState] = useState("");
  const [restype, setRestype] = useState("");
  const [extrainfo, setExtrainfo] = useState("");
  const [helpline, setHelpline] = useState("");
  const [distributor, setDistributor] = useState("");
  const [select_state, setSelect_state] = useState("");
  const [data, setData] = useState([]);
  const onsubmit = (e) => {
    console.log(data);
    e.preventDefault();
    if (
      state !== "" &&
      restype !== "" &&
      extrainfo !== "" &&
      helpline !== "" &&
      distributor !== ""
    ) {
      const resource = {
        city: state,
        restype: restype,
        extrainfo: extrainfo,
        helpline: helpline,
        distributor: distributor,
      };
      console.log(resource);
      axios
        .post("http://localhost:5000/resources/add", resource)
        .then((res) => {
          console.log(res.data);
        });
    } else {
      alert("please add the sufficient fields");
    }
    // axios
  };
  const deleteResource = (e) => {
    e.preventDefault();
  };
  const fetchCityResources = () => {
    axios
      .post("http://localhost:5000/resources/", { city: select_state })
      .then((res) => {
          console.log(res.data);
        //   console.log(data.length);
        //   setData(res.data);
      });
  };
  //   useEffect(() => {
  //      axios.get('http://localhost:5000/resources/all')
  //      .then(res=>{setData(res.data)})
  //   }, [])
  return (
    <div>
      <h1>User dash</h1>

      <Container>
        <Row>
          <Col sm={6}>
            <Form
              style={{ border: "1px solid grey ", padding: "25px" }}
              onSubmit={onsubmit}
            >
              <Form.Group>
                <Form.Label>Resource Type</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">Choose...</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Haryana">haryana</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Delhi">Delhi</option>
                  <option value="HimachalPradesh">HimachalPradesh</option>
                  <option value="Gujarat">Gujarat</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Resource Type</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setRestype(e.target.value)}
                >
                  <option value="">Choose...</option>
                  <option value="Plasma">Plasma</option>
                  <option value="Oxygen">Oxygen</option>
                  <option value="Injection">Injection</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Distributor</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Distributor"
                  onChange={(e) => setDistributor(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Extra Info</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Extra Info"
                  onChange={(e) => setExtrainfo(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Helpline</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Helpline"
                  onChange={(e) => setHelpline(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Resource
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container>
        <h1>Resourcce Table</h1>
        <select
          className="category"
          // onClick={(e) => Select_state(e.target.value)}
          onChange={(e) => {
            setSelect_state(e.target.value);
            fetchCityResources();
          }}
        >
          <option value="" selected>
            choose city...
          </option>
          <option value="HimachalPradesh">Himachal Pradesh</option>
          <option value="Punjab">Punjab</option>
          <option value="Delhi">Delhi</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="MadhyaPradesh">Madhya Pradesh</option>
          <option value="Haryana">Haryana</option>
        </select>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Resource Type</th>
              <th>Distributor</th>
              <th>ExtraInfo</th>
              <th>helpline</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {   
            data.length!==0?(
            
            data.map((resource) => {
              return (
                <tr>
                  <td>{resource.restype}</td>
                  <td>{resource.distributor}</td>
                  <td>{resource.extrainfo}</td>
                  <td>{resource.helpline}</td>
                  <td>
                    <Button onClick={deleteResource}>Delete</Button>
                  </td>
                </tr>
              );
            })
            ):
            <p></p>
        }
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default UserDashboard;