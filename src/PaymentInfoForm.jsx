import { useState } from "react";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import { FaPlus, FaTimes, FaSave, FaTrash } from "react-icons/fa";
import "./components/EmployeeForm.css";

const PaymentInfoForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [paymentOptions, setPaymentOptions] = useState([]);

  // holds every possible field across all payment types
  // only the relevant ones get shown/used depending on which option is picked
  const [newOption, setNewOption] = useState({
    paymentOption: "",
    isDefault: false,
    // Bank fields
    bank: "",
    branch: "",
    accountNumber: "",
    accountName: "",
    paymentBasis: "",
    // na: "",
    note: "",
    // Mobile Money / Cash fields
    serviceProvider: "",
    value: "",
  });

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setNewOption({
      paymentOption: "",
      isDefault: false,
      bank: "",
      branch: "",
      accountNumber: "",
      accountName: "",
      paymentBasis: "",
      // na: "",
      note: "",
      serviceProvider: "",
      value: "",
    });
  };

  const handleModalChange = (e) => {
    const { name, value } = e.target;
    setNewOption({ ...newOption, [name]: value });
  };

  // clears out fields that don't belong to the newly selected payment option
  const handlePaymentOptionChange = (e) => {
    const value = e.target.value;
    setNewOption({
      paymentOption: value,
      isDefault: false,
      bank: "",
      branch: "",
      accountNumber: "",
      accountName: "",
      paymentBasis: "",
      // na: "",
      note: "",
      serviceProvider: "",
      value: "",
    });
  };

  const handleDefaultChange = (e) => {
    setNewOption({ ...newOption, isDefault: e.target.checked });
  };

  const handleAddOption = () => {
    if (!newOption.paymentOption) {
      alert("Please select a Payment Option");
      return;
    }
    const optionWithId = { ...newOption, id: Date.now() };
    setPaymentOptions([...paymentOptions, optionWithId]);
    closeModal();
  };

  const handleDelete = (id) => {
    setPaymentOptions(paymentOptions.filter((option) => option.id !== id));
  };

  return (
    <div>
      <div className="d-flex justify-content-end mb-3">
        <Button className="btn-add-option" onClick={openModal}>
          <FaPlus className="me-1" /> Add Option
        </Button>
      </div>

      <Table bordered responsive className="payment-table">
        <thead>
          <tr>
            <th>Payment Option</th>
            <th>Service Provider</th>
            <th>Branch</th>
            <th>Account #</th>
            <th>Payment Basis</th>
            <th>Value</th>
            <th>Default</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paymentOptions.length === 0 ? (
            <tr>
              <td colSpan="8">No records to display</td>
            </tr>
          ) : (
            paymentOptions.map((option) => (
              <tr key={option.id}>
                <td>{option.paymentOption}</td>
                <td>{option.bank || option.serviceProvider || "-"}</td>
                <td>{option.branch || "-"}</td>
                <td>{option.accountNumber || "-"}</td>
                <td>{option.paymentBasis || "-"}</td>
                <td>{option.value || "-"}</td>
                <td>{option.isDefault ? "Yes" : "No"}</td>
                <td>
                  <Button
                    color="danger"
                    size="sm"
                    onClick={() => handleDelete(option.id)}
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      <Modal isOpen={modalOpen} toggle={closeModal} size="lg">
        <ModalHeader toggle={closeModal}>Add Payment Info</ModalHeader>
        <ModalBody>
          
          <Row className="align-items-center mb-2">
            <Col md={6}>
              <FormGroup>
                <Label>Payment Option</Label>
                <Input
                  type="select"
                  name="paymentOption"
                  value={newOption.paymentOption}
                  onChange={handlePaymentOptionChange}
                >
                  <option value="">Select Payment Option</option>
                  <option value="Bank">Bank</option>
                  <option value="Mobile Money">Mobile Money</option>
                  <option value="Cash">Cash</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <FormGroup check className="mt-4">
                <Input
                  type="checkbox"
                  id="isDefault"
                  checked={newOption.isDefault}
                  onChange={handleDefaultChange}
                />
                <Label check for="isDefault">
                  Default
                </Label>
              </FormGroup>
            </Col>
          </Row>

          {/* Bank field */}
          {newOption.paymentOption === "Bank" && (
            <>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>
                      Bank<span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="select"
                      name="bank"
                      value={newOption.bank}
                      onChange={handleModalChange}
                    >
                      <option value="">Select Bank</option>
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                      <option value="Option 3">Option 3</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>
                      Branch<span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="select"
                      name="branch"
                      value={newOption.branch}
                      onChange={handleModalChange}
                      disabled={!newOption.bank}
                    >
                      <option value="">Select Branch</option>
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                      <option value="Option 3">Option 3</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label>
                      Account Number<span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      name="accountNumber"
                      placeholder="Enter Account No."
                      value={newOption.accountNumber}
                      onChange={handleModalChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label>Account Name</Label>
                    <Input
                      type="text"
                      name="accountName"
                      value={newOption.accountName}
                      onChange={handleModalChange}
                      disabled
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label>
                      Payment Basis<span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="select"
                      name="paymentBasis"
                      value={newOption.paymentBasis}
                      onChange={handleModalChange}
                    >
                      <option value="">Select Payment Basis</option>
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={4}></Col>
                <Col md={4}>
                  <FormGroup>
                    <Label>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={4}></Col>
              </Row>

              <FormGroup>
                <Label>Note</Label>
                <Input
                  type="textarea"
                  name="note"
                  placeholder="Note"
                  value={newOption.note}
                  onChange={handleModalChange}
                  rows={3}
                />
              </FormGroup>
            </>
          )}

          {/* Mobile Money field */}
          {newOption.paymentOption === "Mobile Money" && (
            <>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>
                      Network Provider<span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="select"
                      name="serviceProvider"
                      value={newOption.serviceProvider}
                      onChange={handleModalChange}
                    >
                      <option value="">Select Network</option>
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>
                      Mobile Number<span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      name="accountNumber"
                      placeholder="Enter Mobile Number"
                      value={newOption.accountNumber}
                      onChange={handleModalChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>
                      Payment Basis<span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="select"
                      name="paymentBasis"
                      value={newOption.paymentBasis}
                      onChange={handleModalChange}
                    >
                      <option value="">Select Payment Basis</option>
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>
                      Value<span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="number"
                      name="value"
                      placeholder="Enter Value"
                      value={newOption.value}
                      onChange={handleModalChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label>Note</Label>
                <Input
                  type="textarea"
                  name="note"
                  placeholder="Note"
                  value={newOption.note}
                  onChange={handleModalChange}
                  rows={3}
                />
              </FormGroup>
            </>
          )}

          {/* Cashfields  */}
          {newOption.paymentOption === "Cash" && (
            <>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>
                      Payment Basis<span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="select"
                      name="paymentBasis"
                      value={newOption.paymentBasis}
                      onChange={handleModalChange}
                    >
                      <option value="">Select Payment Basis</option>
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  {/* <FormGroup>
                    <Label>
                      Value<span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="number"
                      name="value"
                      placeholder="Enter Value"
                      value={newOption.value}
                      onChange={handleModalChange}
                    />
                  </FormGroup> */}
                </Col>
              </Row>
              <FormGroup>
                <Label>Note</Label>
                <Input
                  type="textarea"
                  name="note"
                  placeholder="Note"
                  value={newOption.note}
                  onChange={handleModalChange}
                  rows={3}
                />
              </FormGroup>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={closeModal}>
            <FaTimes className="me-1" /> Close
          </Button>
          <Button className="btn-add-option" onClick={handleAddOption}>
            <FaSave className="me-1" /> Add
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PaymentInfoForm;
