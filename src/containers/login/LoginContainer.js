import React, {Component} from 'react';
import Login from '../../components/login/Login';
import {
  postLoginAction,
  changeStateLoginAction,
} from '../../redux/actions/login/LoginActions';
import {connect} from 'react-redux';

class LoginContainer extends React.Component {
  // componentDidMount() {
  // }
  componentWillUnmount() {
    this.props.changeStateLoginAction([], []);
  }
  componentDidUpdate() {}
  render() {
    return <Login {...this.props} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postLoginAction: (input) => {
      dispatch(postLoginAction(input));
    },
    changeStateLoginAction: (key, value) => {
      dispatch(changeStateLoginAction(key, value));
    },
  };
};

const mapStateToProps = (state) => {
  console.log("data tra ve gi day",state.LoginReducers.loginData)
  return {
     error: state.LoginReducers.error,
    loginState: state.LoginReducers.state, //erro: -1, Success: 1, default:0
     loading: state.LoginReducers.loading,
    statusCode: state.LoginReducers.statusCode,
     loginData: state.LoginReducers.loginData,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
