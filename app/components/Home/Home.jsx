import React, { Component } from "react"
import PropTypes from "prop-types"
import { input, centerDiv, containerDiv, header, submit } from "./styles.css"

// login on this page , if logged in show different page
class Home extends Component {
  render() {
    return (
      <div className={containerDiv}>
        <header className={header}>Door To Door Diary</header>
        <div className={centerDiv}>
          <form>
            <input
              type="text"
              className={input}
              placeholder="Username"
              id="userName"
              onChange={e => this.props.handleChange(e, "userName", e.target.value)}
              value={this.props.userName}
            />
            <input
              type="text"
              className={input}
              placeholder="Password"
              id="password"
              onChange={e => this.props.handleChange(e, "password", e.target.value)}
              value={this.props.password}
            />
            <button
              type="submit"
              className={submit}
              onKeyDown={e => this.props.onKeyPress(e, this.state.userName, this.state.password)}
              tabIndex="-1"
            />
          </form>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}
export default Home
