const formatTableData = (customers, jobs) => {
  const newCustomers = [...customers]
  const newJobs = [...jobs]
  Object.assign(
    {},
    newCustomers.map(customer =>
      Object.assign(
        {},
        customer.address,
        customer.name,
        customer.groupName,
        newJobs[customer.address].lastCompleted,
        newJobs[customer.address].nextScheduled
      )
    )
  )
}
export default formatTableData
