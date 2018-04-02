import React, { Component } from "react"
import PropTypes from "prop-types"
import { Home } from "components"
import { bgImg } from "./styles.css"

class MainContainer extends Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

MainContainer.propTypes = {}

export default MainContainer
