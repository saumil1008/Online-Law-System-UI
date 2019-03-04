import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { doLogout } from "../../actions/index";
import { Link } from "react-router-dom";

class AppHeader extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
          <Navbar.Text>
            <Link to="/">Law Search</Link>
          </Navbar.Text>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Navbar.Text>
            <Link to="/courtSearch">Court Search</Link>
          </Navbar.Text>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Navbar.Text>
            <Link to="/lawyerSearch">Lawyer Search</Link>
          </Navbar.Text>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Navbar.Text>
            <Link to="/criminalSearch">Criminal Search</Link>
          </Navbar.Text>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Navbar.Text>
            {this.props.firstname === "admin" ? (
              <Link to="/addCourt">Add Court</Link>
            ) : null}
          </Navbar.Text>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Navbar.Text>
            {this.props.firstname === "admin" ? (
              <Link to="/addLawyer">Add Lawyer</Link>
            ) : null}
          </Navbar.Text>
        </Nav>
        <Navbar.Text>Signed in as: &nbsp;&nbsp;&nbsp;</Navbar.Text>
        <b>{this.props.firstname + " " + this.props.lastname}</b>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          variant="outline-light"
          onClick={() => this.props.doLogout()}
        >
          Sign out
        </Button>
      </Navbar>
    );
  }
}

const mapStateToProps = store => {
  return {
    firstname: store.profile.firstName,
    lastname: store.profile.lastName,
    uemailId: store.profile.email
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ doLogout: doLogout }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeader);
