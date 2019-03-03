import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LoginPanel from "../presentation/login/LoginPanel";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { doLogin } from "../../actions";

class LoginAdmin extends React.Component {
    render() {
        return (
            <div >
                <Container fluid style={{ overflowY: 'scroll' }}>
                    <Row>
                        <Col sm={4} />
                        <LoginPanel login={this.props.login} />
                        <Col sm={4} />
                    </Row>
                </Container>
            </div >
        );
    }
}

function mapStateToProps(store) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            login: doLogin
        },
        dispatch
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginAdmin);
