import React, { Component } from "react";
//import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

class Profile extends Component {

  render() {

    return (
      <>
        <h1>Profile</h1>
      </>
    )
  }
}
// const mapStateToProps = (state)=> {
//   console.log(this.state)
// }

export default connect()(Profile);