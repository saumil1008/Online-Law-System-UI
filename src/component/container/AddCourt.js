import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, FormGroup, Col, Button, Form } from "react-bootstrap";
import { addCourt } from "../../actions/court";

class AddCourt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      address: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addCourt = e => {
    e.preventDefault();
    this.props.addCourt(this.state);
  };

  render() {
    return (
      <Container fluid>
        <br />
        <Form>
          <Form.Label>Add Court</Form.Label>
          <hr />
          <Form.Row>
            <Col>
              <Form.Label>Name</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                onChange={this.handleChange}
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Label>Type</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter Type"
                name="type"
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
                type="text"
                placeholder="Enter Address"
                name="address"
                onChange={this.handleChange}
              />
            </Col>
          </Form.Row>
          <FormGroup>
            <Button type="submit" onClick={this.addCourt}>
              Add
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button type="reset">Reset</Button>
          </FormGroup>
        </Form>
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
      addCourt: addCourt
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCourt);
