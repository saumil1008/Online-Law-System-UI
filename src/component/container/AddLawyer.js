import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, FormGroup, Col, Button, Form } from "react-bootstrap";
import { addLawyer } from "../../actions/lawyer";
import { getCourts } from "../../actions/court";

class AddLawyer extends Component {
  constructor(props) {
    super(props);
    this.props.getCourts();
    this.state = {
      name: "",
      age: 0,
      qualification: "",
      expertise: "",
      courtId: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChangeId = e => {
    this.setState({ [e.target.name]: parseInt(e.target.value) });
  };

  addL = e => {
    e.preventDefault();
    this.props.addLawyer(this.state);
  };

  createCourts = () => {
    let options = [];
    let item = [...this.props.allCourts];
    item.length > 0
      ? item.map((cat, i) =>
          options.push(
            <option key={i} value={cat.id}>
              {cat.name}
            </option>
          )
        )
      : options.push(<option key={-1} value="No Courts" />);
    return options;
  };

  render() {
    return (
      <Container fluid>
        <br />
        <Form>
          <Form.Label>Add Lawyer</Form.Label>
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
              <Form.Label>Age</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter age"
                name="age"
                onChange={this.handleChangeId}
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Label>Qualification</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter qualification"
                name="qualification"
                onChange={this.handleChange}
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Label>Expertise</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter expertise"
                name="expertise"
                onChange={this.handleChange}
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Label>Court</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                name="courtId"
                list="courts"
                onChange={this.handleChange}
              />
              <datalist id="courts">{this.createCourts()}</datalist>
            </Col>
          </Form.Row>
          <FormGroup>
            <Button type="submit" onClick={this.addL}>
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
  console.log(store);
  return {
    allCourts: store.courtReducer.allCourts
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addLawyer: addLawyer,
      getCourts: getCourts
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddLawyer);
