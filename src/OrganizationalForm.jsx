import { useState } from "react";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";
import SectionDivider from "./components/SectionDivider";

const OrganizationalForm = () => {
  // one object to hold all form values, just like PersonalForm
  const [formData, setFormData] = useState({
    staffId: "",
    hireDate: "",
    section: "",
    department: "",
    division: "",
    employeeType: "",
    position: "",
    unit: "",
    location: "",
    taxOption: "",
    employmentOption: "Permanent",
    overtimeExempt: false,
    salaryGrade: "",
    notch: "",
    currency: "",
    salaryType: "",
    rate: 0,
    minRate: 0,
    maxRate: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, overtimeExempt: e.target.checked });
  };

  const handleSalaryGradeChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, salaryGrade: value });
  };

  return (
    <form>
      <Row className="align-items-start">
        {/* Left part */}
        <Col md={6} className="pe-4">
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>
                  Staff ID<span className="text-danger">*</span>
                </Label>
                <Input
                  type="text"
                  name="staffId"
                  placeholder="Enter Staff ID"
                  value={formData.staffId}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>
                  Hire Date<span className="text-danger">*</span>
                </Label>
                <Input
                  type="date"
                  name="hireDate"
                  value={formData.hireDate}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <SectionDivider title="Segments" alignment="center" />

          <Row>
            <Col md={4}>
              <FormGroup>
                <Label>Section</Label>
                <Input
                  type="select"
                  name="section"
                  value={formData.section}
                  onChange={handleChange}
                >
                  <option value="">Select Section</option>
                  <option value="Finance">Finance</option>
                  <option value="IT">IT</option>
                  <option value="HR">HR</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>
                  Department<span className="text-danger">*</span>
                </Label>
                <Input
                  type="select"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                >
                  <option value="">Select Department</option>
                  <option value="Software">Software</option>
                  <option value="Sales">Sales</option>
                  <option value="Consulting"> Consulting</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Division</Label>
                <Input
                  type="select"
                  name="division"
                  value={formData.division}
                  onChange={handleChange}
                >
                  <option value="">Select Division</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Retail">Retail</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <FormGroup>
                <Label>
                  Employee Type<span className="text-danger">*</span>
                </Label>
                <Input
                  type="select"
                  name="employeeType"
                  value={formData.employeeType}
                  onChange={handleChange}
                >
                  <option value="">Select Employee type</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Contract">Contract</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Position</Label>
                <Input
                  type="select"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                >
                  <option value="">Select Position</option>
                  <option value="Manager">Manager</option>
                  <option value="Officer">Officer</option>
                  <option value="Intern">Intern</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Unit</Label>
                <Input
                  type="select"
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                >
                  <option value="">Select Unit</option>
                  <option value="Unit A">Unit A</option>
                  <option value="Unit B">Unit B</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <FormGroup>
                <Label>Location</Label>
                <Input
                  type="select"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                >
                  <option value="">Select Location</option>
                  <option value="Accra">Accra</option>
                  <option value="Kumasi">Kumasi</option>
                  <option value="Takoradi">Takoradi</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </Col>

        {/* Right part */}
        <Col md={6} className="section-split">
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label>
                  Tax Option<span className="text-danger">*</span>
                </Label>
                <Input
                  type="select"
                  name="taxOption"
                  value={formData.taxOption}
                  onChange={handleChange}
                >
                  <option value="">Select Tax Option</option>
                  <option value="Resident">Resident</option>
                  <option value="Non-Resident">Non-Resident</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Employment Option</Label>
                <Input
                  type="select"
                  name="employmentOption"
                  value={formData.employmentOption}
                  onChange={handleChange}
                >
                  <option value="Permanent">Permanent</option>
                  <option value="Temporary">Temporary</option>
                  <option value="Probation">Probation</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={1}>
              <FormGroup check className="mt-4">
                <Input
                  type="checkbox"
                  id="overtimeExempt"
                  checked={formData.overtimeExempt}
                  onChange={handleCheckboxChange}
                />
                <Label check for="overtimeExempt" className="text-nowrap">
                  Overtime Exempt
                </Label>
              </FormGroup>
            </Col>
          </Row>

          <SectionDivider title="Salary Info" alignment="center" />

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>
                  Salary Grade<span className="text-danger">*</span>
                </Label>
                <Input
                  type="select"
                  name="salaryGrade"
                  value={formData.salaryGrade}
                  onChange={handleSalaryGradeChange}
                >
                  <option value="">Select Salary Grade</option>
                  <option value="Grade 1">Grade 1</option>
                  <option value="Grade 2">Grade 2</option>
                  <option value="Grade 3">Grade 3</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Notch</Label>
                <Input
                  type="select"
                  name="notch"
                  value={formData.notch}
                  onChange={handleChange}
                  disabled={!formData.salaryGrade}
                >
                  <option value="">Select Notch</option>
                  <option value="Notch 1">Notch 1</option>
                  <option value="Notch 2">Notch 2</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <FormGroup>
                <Label>Currency</Label>
                <Input
                  type="text"
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  disabled={!formData.salaryGrade}
                  placeholder=""
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Salary Type</Label>
                <Input
                  type="text"
                  name="salaryType"
                  value={formData.salaryType}
                  onChange={handleChange}
                  disabled={!formData.salaryGrade}
                  placeholder=""
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>
                  Rate<span className="text-danger">*</span>
                </Label>
                <Input
                  type="number"
                  name="rate"
                  value={formData.rate}
                  onChange={handleChange}
                />
              </FormGroup>
              <small className="d-flex justify-content-between text-muted">
                <span>
                  <strong>Min:</strong> {formData.minRate.toFixed(2)}
                </span>
                <span>
                  <strong>Max:</strong> {formData.maxRate.toFixed(2)}
                </span>
              </small>
            </Col>
          </Row>
        </Col>
      </Row>
    </form>
  );
};

export default OrganizationalForm;
