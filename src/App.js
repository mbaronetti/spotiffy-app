import React , { Component } from "react";
//import logo from "./logo.svg";
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { showModal } from './redux/actions/index.js';
import "./App.css";

const mapDispatchToProps = dispatch => {
  return{
    showModal: val => dispatch(showModal(val))
  }
}

const mapStateToProps = state => {
  return{
    modalVisible: state.modalVisible
  }
}

class App extends Component {
  render(){
    const {modalVisible} = this.props;
    const {showModal} = this.props;
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(App);
