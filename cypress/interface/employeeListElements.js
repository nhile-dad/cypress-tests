export const employeeListElements = {
  search: {
    employeeName: { type: 'xpath', value: "//label[text()='Employee Name']/parent::div/following-sibling::div//input" },
    employeeId: { type: 'xpath', value: "//label[text()='Employee Id']/parent::div/following-sibling::div//input" },
    jobTitle: {
      type: 'xpathDropdown',
      input: "//label[text()='Job Title']/parent::div/following-sibling::div//div[contains(@class, 'oxd-select-text-input')]",
      option: (value) => `//div[@role='listbox']//span[text()='${value}']`
    },
    employmentStatus: { type: 'css', value: 'select[name="employmentStatus"]' },
    resetButton: { type: 'css', value: 'button[type="reset"]' },
    searchButton: { type: 'css', value: 'button[type="submit"]' }
  },
  results: {
    rowSelector: '.oxd-table-card', // không dùng tr/td
    cellSelector: '.oxd-table-cell' // selector chung của các ô
  }
}
