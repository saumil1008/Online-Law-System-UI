import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { findCourt } from "../../actions/court";

class CourtSearch extends Component {
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
                            <Form.Label>Court Search</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control
                                type="text"
                                name="search"
                                onChange={this.handleChange}
                                placeholder="Search by name"
                            />
                        </Col>
                        <Col>
                            <Button
                                onClick={() => {
                                    this.props.findCourt(this.state.search);
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
                            <TableHeaderColumn dataField="type">
                                Type
                  </TableHeaderColumn>
                            <TableHeaderColumn dataField="address">
                                Address
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
        data: store.courtReducer.data
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            findCourt: findCourt
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CourtSearch);
