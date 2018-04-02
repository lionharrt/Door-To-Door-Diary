import React, { Component } from "react"
import { DataTable } from "components"
import PropTypes from "prop-types"
import formatTableData from "helpers/utils.jsx"

class DataTableContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }
  componentWillMount() {
    this.setState({ data: "") })
    console.log(this.props)
  }
  render() {
    return <DataTable data={this.state.data} />
  }
}

DataTableContainer.propTypes = {

}

export default DataTableContainer
