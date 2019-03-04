import React from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  InputGroup,
  FormControl,
  Button,
  Form
} from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { doLogin, setIsCreate } from "../../actions";

class LoginAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: "",
      passkey: ""
    };
  }

  actionLogin = e => {
    e.preventDefault();
    this.props.login(this.state.uid, this.state.passkey);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col sm={4} />
            <Col sm={4}>
              <br />
              <br />
              <h2>Login</h2>
              <hr />
              <Form>
                <FormGroup controlId="formHorizontalEmail">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="Enter User Id"
                      name="uid"
                      onChange={this.handleChange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                  <InputGroup>
                    <FormControl
                      type="password"
                      placeholder="Enter Password"
                      name="passkey"
                      onChange={this.handleChange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Button type="submit" onClick={this.actionLogin}>
                    Sign in
                  </Button>
                  &nbsp;&nbsp;&nbsp;Or&nbsp;&nbsp;&nbsp;
                  <Button
                    onClick={() => {
                      this.props.setIsCreate(true);
                    }}
                  >
                    Create new
                  </Button>
                </FormGroup>
              </Form>
            </Col>
            <Col sm={4} />
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      login: doLogin,
      setIsCreate: setIsCreate
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginAdmin);
