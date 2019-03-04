import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, FormGroup, Col, Button, Form, Row } from "react-bootstrap";
import { addUser } from "../../actions";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      address: "",
      gender: "",
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addUser = e => {
    e.preventDefault();
    this.props.addUser(this.state);
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col lg={4} />
          <Col lg={4}>
            <br />
            <br />
            <h2>Add User</h2>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col lg={4} />
          <Col lg={4}>
            <Form>
              <Form.Row>
                <Col>
                  <Form.Label>First Name</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                  required
                    type="text"
                    placeholder="Enter First Name"
                    name="firstName"
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Label>Last Name</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                  required
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Label>Email</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                  required
                    type="mail"
                    placeholder="Enter email"
                    name="email"
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Label>City</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                  required
                    type="text"
                    placeholder="Enter City"
                    name="city"
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Label>Contact</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                  required
                    type="tel"
                    placeholder="Enter Contact"
                    name="contactNo"
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Label>Address</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                  required
                    type="text"
                    placeholder="Enter Address"
                    name="address"
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Label>Gender</Form.Label>
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    name="gender"
                    label="Male"
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    type="radio"
                    name="gender"
                    label="Female"
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Label>User Name</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                  required
                    type="text"
                    placeholder="Enter User Name"
                    name="username"
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Label>Password</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                  required
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Row>
              <FormGroup>
                <Button type="submit" onClick={this.addUser}>
                  Add
                </Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addUser: addUser
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);
