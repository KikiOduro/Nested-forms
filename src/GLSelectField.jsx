import { FormGroup, Label, InputGroup, Input, Button } from "reactstrap";
import { FaTimes } from "react-icons/fa";

const GLSelectField = ({ label, name, value, onChange, onClear }) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <InputGroup>
        <Input type="select" name={name} value={value} onChange={onChange}>
          <option value="">Search GL</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
        </Input>
        <Button color="light" onClick={() => onClear(name)} title="Clear">
          <FaTimes />
        </Button>
      </InputGroup>
    </FormGroup>
  );
};

export default GLSelectField;