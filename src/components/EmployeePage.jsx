import Header from "./Header";

export default function EmployeePage() {
  return (
    <div className="employeePage">
      <div>EmployeePage</div>
      <Header />
      <h3>Employee Name</h3>

      <div className="employeeDetailBox pastel-1">
        <p>Call Office</p>
        <h6>781-000-0002</h6>
      </div>

      <div className="employeeDetailBox pastel-2">
        <p>Call Mobile</p>
        <h6>781-000-0002</h6>
      </div>

      <div className="employeeDetailBox pastel-3">
        <p>SMS</p>
        <h6>781-000-0002</h6>
      </div>

      <div className="employeeDetailBox pastel-4">
        <p>Email</p>
        <h6>eramjabeen@example.com</h6>
      </div>
    </div>
  );
}
