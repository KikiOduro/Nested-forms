import { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane, Button } from "reactstrap";
import { FaTimes, FaRedo, FaSave } from "react-icons/fa";
import PersonalForm from "./PersonalForm";
import OrganizationalForm from "./OrganizationalForm";
import PaymentInfoForm from "./PaymentInfoForm";
import OtherInfoForm from "./OtherInfoForm";
import GeneralLedgerForm from "./GeneralLedgerForm";
import "./components/EmployeeForm.css";

const AddEmployeeDetails = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [resetKey, setResetKey] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const handleReset = () => {
    setResetKey(resetKey + 1);
  };

  return (
    <div className="employee-form-wrapper">
      {/* Header */}
      <div className="form-header">
        <h5>Add Employee Details</h5>
      </div>

      {/* Tabs */}
      <Nav tabs className="employee-tabs">
        <NavItem>
          <NavLink
            className={activeTab === "personal" ? "active" : ""}
            onClick={() => toggleTab("personal")}
          >
            Personal
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "organizational" ? "active" : ""}
            onClick={() => toggleTab("organizational")}
          >
            Organizational
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "payment" ? "active" : ""}
            onClick={() => toggleTab("payment")}
          >
            Payment Info
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "other" ? "active" : ""}
            onClick={() => toggleTab("other")}
          >
            Other Info
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "ledger" ? "active" : ""}
            onClick={() => toggleTab("ledger")}
          >
            General Ledger
          </NavLink>
        </NavItem>
      </Nav>

      {/* Tab Content */}
      <TabContent activeTab={activeTab} className="p-4">
        <TabPane tabId="personal">
          <PersonalForm key={resetKey} />
        </TabPane>
        <TabPane tabId="organizational">
          <OrganizationalForm key={resetKey} />
        </TabPane>
        <TabPane tabId="payment">
          <PaymentInfoForm key={resetKey} />
        </TabPane>
        <TabPane tabId="other">
          <OtherInfoForm key={resetKey} />
        </TabPane>
        <TabPane tabId="ledger">
          <GeneralLedgerForm key={resetKey} />
        </TabPane>
      </TabContent>

      {/* Footer note + buttons */}
      <div className="form-footer d-flex justify-content-between align-items-center p-3">
        <small className="required-note fst-italic">
          All fields marked with asterisk are required (*)
        </small>
        <div>
          <Button className="btn-cancel me-2">
            <FaTimes className="me-1" /> Cancel
          </Button>
          <Button className="btn-reset me-2" onClick={handleReset}>
            <FaRedo className="me-1" /> Reset
          </Button>
          <Button className="btn-save">
            <FaSave className="me-1" /> Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeDetails;