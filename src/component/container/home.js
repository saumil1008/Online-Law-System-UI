import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { findLaw, getLaws } from "../../actions/home";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.getLaws();
    this.state = {
      search: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container fluid>
        <br />
        <Form>
          <Form.Row>
            <Col>
              <Form.Label>Law Search</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                name="search"
                onChange={this.handleChange}
                placeholder="Search"
              />
            </Col>
            <Col>
              <Button
                onClick={() => {
                  this.props.findLaw(this.state.search);
                }}
              >
                Search
              </Button>
            </Col>
          </Form.Row>
        </Form>
        <hr />
        <Row>
          <Col>
            <BootstrapTable data={this.props.data} hover version="4">
              <TableHeaderColumn isKey hidden dataField="id">
                ID
              </TableHeaderColumn>
              <TableHeaderColumn dataField="section">Section</TableHeaderColumn>
              <TableHeaderColumn dataField="rule">Rule</TableHeaderColumn>
            </BootstrapTable>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    data: store.homeReducer.data
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      findLaw: findLaw,
      getLaws: getLaws
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
