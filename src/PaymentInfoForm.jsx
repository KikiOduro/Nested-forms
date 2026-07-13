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
} from "reactstrap";
import { FaPlus, FaTimes, FaSave, FaTrash } from "react-icons/fa";

const PaymentInfoForm = () => {
  // controls whether the modal is open or closed
  const [modalOpen, setModalOpen] = useState(false);

  // holds all the payment options that have been added (the table rows)
  const [paymentOptions, setPaymentOptions] = useState([]);

  // holds the values typed inside the modal form
  const [newOption, setNewOption] = useState({
    paymentOption: "",
    serviceProvider: "",
    branch: "",
    accountNumber: "",
    paymentBasis: "",
    value: "",
    isDefault: false,
  });

  // opens the modal
  const openModal = () => setModalOpen(true);

  // closes the modal and clears whatever was typed
  const closeModal = () => {
    setModalOpen(false);
    setNewOption({
      paymentOption: "",
      serviceProvider: "",
      branch: "",
      accountNumber: "",
      paymentBasis: "",
      value: "",
      isDefault: false,
    });
  };

  // handles typing/selecting inside the modal
  const handleModalChange = (e) => {
    const { name, value } = e.target;
    setNewOption({ ...newOption, [name]: value });
  };

  // handles the Default checkbox inside the modal
  const handleDefaultChange = (e) => {
    setNewOption({ ...newOption, isDefault: e.target.checked });
  };

  // adds the new option to the table and closes the modal
  const handleAddOption = () => {
    // simple check so we don't add empty rows
    if (!newOption.paymentOption) {
      alert("Please select a Payment Option");
      return;
    }

    // give this row a unique id so we can delete it later
    const optionWithId = { ...newOption, id: Date.now() };

    setPaymentOptions([...paymentOptions, optionWithId]);
    closeModal();
  };

  // removes a row from the table
  const handleDelete = (id) => {
    setPaymentOptions(paymentOptions.filter((option) => option.id !== id));
  };

  return (
    <div>
      {/* Add Option button */}
      <div className="d-flex justify-content-end mb-3">
        <Button color="primary" onClick={openModal}>
          <FaPlus className="me-1" /> Add Option
        </Button>
      </div>

      {/* Table showing all added payment options */}
      <Table bordered responsive>
        <thead className="table-light">
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
                <td>{option.serviceProvider}</td>
                <td>{option.branch}</td>
                <td>{option.accountNumber}</td>
                <td>{option.paymentBasis}</td>
                <td>{option.value}</td>
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

      {/* Add Payment Info Modal */}
      <Modal isOpen={modalOpen} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>Add Payment Info</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>Payment Option</Label>
            <Input
              type="select"
              name="paymentOption"
              value={newOption.paymentOption}
              onChange={handleModalChange}
            >
              <option value="">Select Payment Option</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Mobile Money">Mobile Money</option>
              <option value="Cash">Cash</option>
            </Input>
          </FormGroup>

          {/* These extra fields only show once a Payment Option is picked */}
          {newOption.paymentOption && (
            <>
              <FormGroup>
                <Label>Service Provider</Label>
                <Input
                  type="text"
                  name="serviceProvider"
                  placeholder="e.g. MTN, Ecobank"
                  value={newOption.serviceProvider}
                  onChange={handleModalChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Branch</Label>
                <Input
                  type="text"
                  name="branch"
                  placeholder="Enter Branch"
                  value={newOption.branch}
                  onChange={handleModalChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Account #</Label>
                <Input
                  type="text"
                  name="accountNumber"
                  placeholder="Enter Account Number"
                  value={newOption.accountNumber}
                  onChange={handleModalChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Payment Basis</Label>
                <Input
                  type="select"
                  name="paymentBasis"
                  value={newOption.paymentBasis}
                  onChange={handleModalChange}
                >
                  <option value="">Select Payment Basis</option>
                  <option value="Percentage">Percentage</option>
                  <option value="Fixed Amount">Fixed Amount</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label>Value</Label>
                <Input
                  type="number"
                  name="value"
                  placeholder="Enter Value"
                  value={newOption.value}
                  onChange={handleModalChange}
                />
              </FormGroup>

              <FormGroup check>
                <Input
                  type="checkbox"
                  id="isDefault"
                  checked={newOption.isDefault}
                  onChange={handleDefaultChange}
                />
                <Label check for="isDefault">Set as Default</Label>
              </FormGroup>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={closeModal}>
            <FaTimes className="me-1" /> Close
          </Button>
          <Button color="primary" onClick={handleAddOption}>
            <FaSave className="me-1" /> Add
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PaymentInfoForm;