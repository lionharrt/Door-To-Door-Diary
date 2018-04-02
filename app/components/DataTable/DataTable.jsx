import React from "react"
import PropTypes from "prop-types"
import ReactTable from "react-table"
import "react-table/react-table.css"

const columns = [
  {
    Header: "Customer",
    columns: [{ Header: "Address", accessor: "address" }, { Header: "Name", accessor: "name" }]
  },
  { Header: "Group", columns: [{ Header: "Group Name", accessor: "groupName" }] },
  {
    Header: "Job",
    columns: [
      { Header: "Last Job Completed", accessor: "lastCompleted" },
      { Header: "Next Scheduled", accessor: "nextScheduled" }
    ]
  }
]

const DataTable = () => {
  const { data } = this.props
  return (
    <div>
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    </div>
  )
}

DataTable.propTypes = {
  data: PropTypes.shape.isRequired
}

export default DataTable
