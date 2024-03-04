function submitForm() {
    var employeeType = document.getElementById('employeeType').value;
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var additionalFields = document.getElementById('additionalFields');
    var payrollDetails = '';

    if (employeeType === 'salary') {
        var salary = prompt('Enter salary:');
        payrollDetails = 'Salary: $' + salary;
    } else if (employeeType === 'hourly') {
        var hoursWorked = prompt('Enter hours worked:');
        var hourlyRate = prompt('Enter hourly rate:');
        payrollDetails = 'Hours Worked: ' + hoursWorked + '<br>Hourly Rate: $' + hourlyRate;
    } else if (employeeType === 'commission') {
        var salary = prompt('Enter salary:');
        var commissionRate = prompt('Enter commission rate:');
        var sales = prompt('Enter sales amount:');
        payrollDetails = 'Salary: $' + salary + '<br>Commission Rate: ' + commissionRate + '<br>Sales Amount: $' + sales;
    } else {
        alert('Invalid employee type.');
        return;
    }

    var result = '<h3>Employee Details:</h3>' +
                 '<p>Employee Type: ' + employeeType + '</p>' +
                 '<p>Employee ID: ' + id + '</p>' +
                 '<p>Employee Name: ' + name + '</p>' +
                 '<h3>Payroll Details:</h3>' +
                 '<p>' + payrollDetails + '</p>';

    var newWindow = window.open('', '_blank');
    newWindow.document.write(result);
}
