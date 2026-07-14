// import { useState } from "react";
// import { Row, Col } from "reactstrap";
// import GLSelectField from "./GLSelectField";

// const GeneralLedgerForm = () => {
//   // one object holding all 12 GL fields across the 3 sections
//   const [formData, setFormData] = useState({
//     // Regular
//     salary: "",
//     incomeTax: "",
//     netSalaryPayable: "",
//     operatingOvertime: "",
//     shiftAllowance: "",
//     taxRelief: "",
//     // Mandatory
//     mandatoryEmployeeContribution: "",
//     mandatoryEmployerContribution: "",
//     mandatoryEmployerTotalPayable: "",
//     // Voluntary
//     voluntaryEmployeeContribution: "",
//     voluntaryEmployerContribution: "",
//     voluntaryEmployerTotalPayable: "",
//   });

//   // handles selecting an option in any dropdown
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // handles clicking the X button to clear one field
//   const handleClear = (name) => {
//     setFormData({ ...formData, [name]: "" });
//   };

//   return (
//     <form>
//       <Row className="align-items-start">
//         {/* REGULAR SECTION */}
//         <Col md={5}>
//           <hr />
//           <h6 className="text-center mb-3">Regular</h6>
//           <Row>
//             <Col md={6}>
//               <GLSelectField
//                 label="Salary"
//                 name="salary"
//                 value={formData.salary}
//                 onChange={handleChange}
//                 onClear={handleClear}
//               />
//               <GLSelectField
//                 label="Net Salary Payable"
//                 name="netSalaryPayable"
//                 value={formData.netSalaryPayable}
//                 onChange={handleChange}
//                 onClear={handleClear}
//               />
//               <GLSelectField
//                 label="Shift Allowance"
//                 name="shiftAllowance"
//                 value={formData.shiftAllowance}
//                 onChange={handleChange}
//                 onClear={handleClear}
//               />
//             </Col>
//             <Col md={6}>
//               <GLSelectField
//                 label="Income Tax"
//                 name="incomeTax"
//                 value={formData.incomeTax}
//                 onChange={handleChange}
//                 onClear={handleClear}
//               />
//               <GLSelectField
//                 label="Operating Overtime"
//                 name="operatingOvertime"
//                 value={formData.operatingOvertime}
//                 onChange={handleChange}
//                 onClear={handleClear}
//               />
//               <GLSelectField
//                 label="Tax Relief"
//                 name="taxRelief"
//                 value={formData.taxRelief}
//                 onChange={handleChange}
//                 onClear={handleClear}
//               />
//             </Col>
//           </Row>
//         </Col>

//         {/* MANDATORY SECTION */}
//         <Col md={3} className="border-start ps-4">
//           <hr />
//           <h6 className="text-center mb-3">Mandatory</h6>
//           <GLSelectField
//             label="Employee Contribution GL"
//             name="mandatoryEmployeeContribution"
//             value={formData.mandatoryEmployeeContribution}
//             onChange={handleChange}
//             onClear={handleClear}
//           />
//           <GLSelectField
//             label="Employer Contribution GL"
//             name="mandatoryEmployerContribution"
//             value={formData.mandatoryEmployerContribution}
//             onChange={handleChange}
//             onClear={handleClear}
//           />
//           <GLSelectField
//             label="Employer Total Payable"
//             name="mandatoryEmployerTotalPayable"
//             value={formData.mandatoryEmployerTotalPayable}
//             onChange={handleChange}
//             onClear={handleClear}
//           />
//         </Col>

//         {/* VOLUNTARY SECTION */}
//         <Col md={3}>
//           <hr />
//           <h6 className="text-center mb-3">Voluntary</h6>
//           <GLSelectField
//             label="Employee Contribution GL"
//             name="voluntaryEmployeeContribution"
//             value={formData.voluntaryEmployeeContribution}
//             onChange={handleChange}
//             onClear={handleClear}
//           />
//           <GLSelectField
//             label="Employer Contribution GL"
//             name="voluntaryEmployerContribution"
//             value={formData.voluntaryEmployerContribution}
//             onChange={handleChange}
//             onClear={handleClear}
//           />
//           <GLSelectField
//             label="Employer Total Payable"
//             name="voluntaryEmployerTotalPayable"
//             value={formData.voluntaryEmployerTotalPayable}
//             onChange={handleChange}
//             onClear={handleClear}
//           />
//         </Col>
//       </Row>
//     </form>
//   );
// };

// export default GeneralLedgerForm;