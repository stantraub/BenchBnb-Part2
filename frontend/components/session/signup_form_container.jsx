import React from 'react';
import { connect } from 'react-redux';
import sessionForm from "./session_form";
import {signupNewUser} from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  formType: "signup"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  signupNewUser: (user) => (
    dispatch(signupNewUser(user))
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);