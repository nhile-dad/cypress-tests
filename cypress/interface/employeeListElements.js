export const employeeListElements = {
  header: { type: 'css', value: "div.oxd-table-filter-header h5" },
  employeeName: { type: 'xpath', value: "//label[text()='Employee Name']/parent::div/following-sibling::div//input" },
  employeeID: { type: 'css', value: '[name="empId"]' },
  employmentStatus: { type: 'css', value: '[name="empStatus"]' },
  jobTitle: { type: 'css', value: '[name="jobTitle"]' },
  searchButton: { type: 'css', value: 'button[type="submit"]' },
  resetButton: { type: 'css', value: 'button[type="reset"]' },
  resultTable: { type: 'css', value: '.oxd-table' },
  noResultMessage: { type: 'text', value: 'No Records Found' }
}
