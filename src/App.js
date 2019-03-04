import React, { Component } from "react";
import Routes from "./routes";
import createBrowserHistory from "history/createBrowserHistory";
import { Router } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LoginAdmin from "./component/container/LoginAdmin";
import  AppHeader  from "./component/container/AppHeader";
import banner from "./assets/corporate_law_vis_avis_litigation_banner.jpg"

const customHistory = createBrowserHistory();

class App extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      return <LoginAdmin />;
    }

    return (
      <Router history={customHistory}>
        <div>
          <AppHeader />
          <Container fluid className="middlePane">
            <Row>
              <Col lg={2}/>
              <Col lg={8}>
                <Image src={banner} width="100%" height={250} />
              </Col>
            </Row>
            <Row>
              <Col lg={2}/>
              <Col lg={8}>
                <Routes />
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}
function mapStateToProps(store) {
  return {
    isLoggedIn: store.profile.isLoggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
