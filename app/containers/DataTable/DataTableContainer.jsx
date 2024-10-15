import React, { Component } from "react"
import { DataTable } from "../../components/DataTable"

class DataTableContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }
  componentWillMount() {
    this.setState({ data: "" })
  }
  render() {
    return <DataTable data={this.state.data} />
  }
}

DataTableContainer.propTypes = {

}

export default DataTableContainer
