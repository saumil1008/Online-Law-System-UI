import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col, Panel, Button } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { doLogout } from "../../actions/index";

class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = store => {
    return {
        uname: store.profile.name,
        uemailId: store.profile.emailId,
        urole: store.profile.role
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ doLogout: doLogout }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
