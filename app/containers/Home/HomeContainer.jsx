import React, { Component } from "react"
import PropTypes from "prop-types"
import { Home } from "components"
import { DataTableContainer } from "containers"
import firebaseAuth from "config/constants"
import { checkIfAuthed } from "config/auth.jsx"

class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.onKeyPress = this.onKeyPress.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      userName: "",
      password: ""
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPress, false)
  }
  componentWillUnmount() {
    document.removeEventListner("keydown", this.onKeyPress, false)
  }
  onKeyPress(e) {
    if (e.keyCode === 13) {
      e.preventDefault()
      firebaseAuth().onAuthStateChanged(user => {
        if (user) {
          //  DOO SOMETHING
        } else {
          this.setState({ userName: "" })
          this.setState({ password: "" })
        }
      })
    }
  }
  handleChange(e, id, userNameOrPassword) {
    if (id === "userName") {
      this.setState({ userName: userNameOrPassword })
    } else {
      this.setState({ password: userNameOrPassword })
    }
  }
  render() {
    return checkIfAuthed() === false ? (
      <Home
        username={this.state.userName}
        password={this.state.password}
        onKeyPress={this.onKeyPress}
        handleChange={this.handleChange}
      />
    ) : (
      <DataTableContainer />
    )
  }
}

HomeContainer.propTypes = {}

export default HomeContainer
