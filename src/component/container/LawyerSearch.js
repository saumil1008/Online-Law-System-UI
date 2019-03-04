import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { findLawyer } from "../../actions/lawyer";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class Home extends Component {
    constructor(props) {
        super(props);
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
                  <Form.Label>Lawyer Search </Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    name="search"
                    onChange={this.handleChange}
                    placeholder="Search by Expertise"
                  />
                </Col>
                <Col>
                  <Button
                    onClick={() => {
                      this.props.findLawyer(this.state.search);
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
                <BootstrapTable
                  data={this.props.data}
                  hover
                  version="4"
                >
                  <TableHeaderColumn isKey hidden dataField="id">
                    ID
                  </TableHeaderColumn>
                  <TableHeaderColumn dataField="name">
                    Name
                  </TableHeaderColumn>
                  <TableHeaderColumn dataField="age">
                    Age
                  </TableHeaderColumn>
                  <TableHeaderColumn dataField="qualification">
                    Qualification
                  </TableHeaderColumn>
                  <TableHeaderColumn dataField="expertise">
                    Expertise
                  </TableHeaderColumn>
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
      data: store.lawyerReducer.data
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            findLawyer: findLawyer
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
