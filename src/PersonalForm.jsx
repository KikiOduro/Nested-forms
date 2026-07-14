import { useState } from "react";
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  InputGroup,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { FaCamera } from "react-icons/fa";

const PersonalForm = () => {
  // one object to hold all the form values
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    otherNames: "",
    gender: "",
    dateOfBirth: "",
    marital: "",
    country: "",
    nationality: "",
    nationalId: "",
    resident: false,
    email: "",
    phoneCountry: "GH", // default to Ghana flag, matches the screenshot
    phone: "",
    digitalAddress: "",
    homeAddress: "",
    profilePicture: null,
  });

  // handles typing in text inputs and selecting dropdown options
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, resident: e.target.checked });
  };

  // handles the image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profilePicture: file });
  };

  const [flagDropdownOpen, setFlagDropdownOpen] = useState(false);


  const toggleFlagDropdown = () => setFlagDropdownOpen(!flagDropdownOpen);

  const handleCountrySelect = (countryCode) => {
    setFormData({ ...formData, phoneCountry: countryCode });
    setFlagDropdownOpen(false); // close the dropdown after picking
  };

  return (
    <form>
      <Row className="align-items-start">
        <Col md={6}>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label>Title</Label>
                <Input
                  type="select"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                >
                  <option value="">Select Title</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>
                  First Name<span className="text-danger">*</span>
                </Label>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>
                  Last name<span className="text-danger">*</span>
                </Label>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <FormGroup>
                <Label>Other Names</Label>
                <Input
                  type="text"
                  name="otherNames"
                  placeholder="Enter Other Name"
                  value={formData.otherNames}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>
                  Gender<span className="text-danger">*</span>
                </Label>
                <Input
                  type="select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>
                  Date Of Birth<span className="text-danger">*</span>
                </Label>
                <Input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <FormGroup>
                <Label>
                  Marital<span className="text-danger">*</span>
                </Label>
                <Input
                  type="select"
                  name="marital"
                  value={formData.marital}
                  onChange={handleChange}
                >
                  <option value="">Select Marital</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <hr />
          <h6 className="text-start mb-3">Contact Info</h6>

          <Row>
            <Col md={4}>
              <FormGroup>
                <Label>
                  Email Address<span className="text-danger">*</span>
                </Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>
                  Phone<span className="text-danger">*</span>
                </Label>
                <InputGroup>
                  <Dropdown
                    isOpen={flagDropdownOpen}
                    toggle={toggleFlagDropdown}
                  >
                    <DropdownToggle
                      caret
                      className="bg-white border d-flex align-items-center"
                    >
                      <img
                        src={`https://flagcdn.com/24x18/${formData.phoneCountry.toLowerCase()}.png`}
                        alt={formData.phoneCountry}
                        style={{ width: "22px", height: "16px" }}
                      />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={() => handleCountrySelect("GH")}>
                        <img
                          src="https://flagcdn.com/24x18/gh.png"
                          alt="Ghana"
                          className="me-2"
                        />
                        Ghana
                      </DropdownItem>
                      <DropdownItem onClick={() => handleCountrySelect("NG")}>
                        <img
                          src="https://flagcdn.com/24x18/ng.png"
                          alt="Nigeria"
                          className="me-2"
                        />
                        Nigeria
                      </DropdownItem>
                      <DropdownItem onClick={() => handleCountrySelect("TG")}>
                        <img
                          src="https://flagcdn.com/24x18/tg.png"
                          alt="Togo"
                          className="me-2"
                        />
                        Togo
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>

                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Digital Address</Label>
                <Input
                  type="text"
                  name="digitalAddress"
                  placeholder="Enter Digital Address"
                  value={formData.digitalAddress}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <Label>Home Address</Label>
            <Input
              type="textarea"
              name="homeAddress"
              placeholder="Enter Home Address"
              value={formData.homeAddress}
              onChange={handleChange}
              rows={3}
            />
          </FormGroup>
        </Col>

   
        <Col md={6} className="border-start ps-4">
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>
                  Country<span className="text-danger">*</span>
                </Label>
                <Input
                  type="select"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Select Country</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Togo">Togo</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>
                  Nationality<span className="text-danger">*</span>
                </Label>
                <Input
                  type="select"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                >
                  <option value="">Select Nationality</option>
                  <option value="Ghanaian">Ghanaian</option>
                  <option value="Nigerian">Nigerian</option>
                  <option value="Togolese">Togolese</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
              <FormGroup>
                <Label>National ID</Label>
                <Input
                  type="text"
                  name="nationalId"
                  placeholder="Enter National ID"
                  value={formData.nationalId}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup check className="mt-4">
                <Input
                  type="checkbox"
                  id="resident"
                  checked={formData.resident}
                  onChange={handleCheckboxChange}
                />
                <Label check for="resident">
                  Resident
                </Label>
              </FormGroup>
            </Col>
          </Row>

          <hr />
          <h6 className="text-start mb-3">Employee Image</h6>

          <FormGroup>
            <Label>Profile Picture</Label>
            <div>
              <Button
                color="#9ccf19"
                tag="label"
                htmlFor="profilePicUpload"
                className="mb-0"
              >
                <FaCamera className="me-2" /> Upload Image
              </Button>
              <Input
                color="#224159"
                type="file"
                id="profilePicUpload"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </div>
            {formData.profilePicture && (
              <small className="text-muted d-block mt-2">
                {formData.profilePicture.name}
              </small>
            )}
          </FormGroup>
        </Col>
      </Row>
    </form>
  );
};

export default PersonalForm;
