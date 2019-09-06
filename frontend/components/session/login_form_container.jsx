import React from 'react';
import { connect } from 'react-redux';
import loginForm from "./loginForm";
import {loginUser} from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  formType: "login"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loginUser: (user) => (
    dispatch(loginUser(user))
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(loginForm);
