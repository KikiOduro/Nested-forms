import { useState } from "react";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";

const OtherInfoForm = () => {
  // holds all the values for this tab
  const [formData, setFormData] = useState({
    payrollHours: "",
    percentageOfBasicSalary: 0,
    payslipNote: "",
  });

  // handles the Payroll Hours dropdown
  const handlePayrollHoursChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, payrollHours: value });
    // later: this could auto-calculate percentageOfBasicSalary based on the selected hours
  };

  // handles the Payslip Note textarea
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form>
      <Row>
        {/* LEFT SIDE */}
        <Col md={6}>
          <hr />
          <h6 className="text-center mb-3">Salary Info</h6>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Payroll hours</Label>
                <Input
                  type="select"
                  name="payrollHours"
                  value={formData.payrollHours}
                  onChange={handlePayrollHoursChange}
                >
                  <option value="">Select Payroll Hours</option>
                  <option value="40">40 hours/week</option>
                  <option value="35">35 hours/week</option>
                  <option value="20">20 hours/week</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Percentage Of Basic Salary</Label>
                {/* disabled until Payroll Hours is picked, same pattern as Organizational tab */}
                <Input
                  type="number"
                  name="percentageOfBasicSalary"
                  value={formData.percentageOfBasicSalary}
                  onChange={handleChange}
                  disabled={!formData.payrollHours}
                />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <Label>Payslip Note</Label>
            <Input
              type="textarea"
              name="payslipNote"
              placeholder="Note"
              value={formData.payslipNote}
              onChange={handleChange}
              rows={4}
            />
          </FormGroup>
        </Col>

        {/* RIGHT SIDE stays empty, matching the screenshot's layout */}
        <Col md={6} className="border-start ps-4"></Col>
      </Row>
    </form>
  );
};

export default OtherInfoForm;