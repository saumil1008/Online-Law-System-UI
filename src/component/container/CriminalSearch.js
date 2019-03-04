import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Col, Form } from "react-bootstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { getCriminal } from "../../actions/criminal";

class Criminal extends Component {
  constructor(props) {
    super(props);
      this.props.getCriminal();
    }
    
  render() {
    return (
      <Container fluid>
        <br />
        <Form>
          <Form.Row>
            <Col>
              <Form.Label>Criminal Search</Form.Label>
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
              <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
              <TableHeaderColumn dataField="address">Address</TableHeaderColumn>
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
    data: store.criminalReducer.data
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getCriminal: getCriminal
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Criminal);
