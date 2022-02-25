import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Input from "../components/Input";
import UserService from "../services/UserService";
import CustomerService from "../services/CustomerService";
import { connect } from "react-redux";
import { actionTokenInfo } from "../redux/ActionCreator";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function SignupPage(props) {

  const [id, setid] = useState("");
  const [customerName, setcustomerName] = useState("");
  const [surname, setsurname] = useState("");
  const [salary, setsalary] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const history = useHistory();
  const [progress, setprogress] = useState(false);

  const { putToken } = props;

  let onChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "customerName":
        setcustomerName(value);
        break;
      case "id":
        setid(value);
        break;
      case "surname":
        setsurname(value);
        break;
      case "salary":
        setsalary(value);
        break;
      case "phoneNumber":
        setphoneNumber(value);
        break;
    }
  };

  let onClickSignUp = async (event) => {
    event.preventDefault();
    setprogress(true);
    let userService = new UserService();
    let sid = parseInt(id);
    let request = {
      sid,
      username: id,
      password: id,
    };
    let token;
    let user = await userService.getUser(sid);
    if (user.data.sid == null) {
      token = await userService.create(request);
      token = token.data;
      token = await userService.login(request);
      token = token.data;
      putToken(token,sid);
      let numSalary = parseInt(salary);
      let requestCustomer = {
        sid,
        customerName,
        surname,
        phoneNumber,
        salary: numSalary,
        credit: null,
        creditScore: 0,
      };
      token = await userService.login(request);
      token = token.data;
      putToken(token,sid);
      let customerService = new CustomerService();
      await customerService.create(requestCustomer, token);
    }
    token = await userService.login(request);
    token = token.data;
    putToken(token,sid);
    setprogress(false);
    history.push("/query");
  };

  return (
    <Container className="w-25">
      <Col>
        <Row className="text-center">
          <h3>Kredi Başvuru Ekranı</h3>
        </Row>
      </Col>
      <Form>
        <Input
          name="id"
          label="Kimlik Numarası"
          onChange={onChange}
          placeholder="11 haneli olmalıdır"
        />
        <Input name="customerName" label="Müşteri Adı" onChange={onChange} />
        <Input name="surname" label="Müşteri Soyadı" onChange={onChange} />
        <Input name="salary" label="Aylık Gelir" onChange={onChange} />
        <Input
          name="phoneNumber"
          label="Telefon Numarası"
          onChange={onChange}
          placeholder="11 haneli olmalıdır"
        />
      </Form>
      <Form.Group className="text-center mt-3">
        <Button onClick={onClickSignUp}>Kredi Sonucunu Göster</Button>
        {progress ? (
          <Alert className="mt-2" variant="info">
            Lütfen işlem bitene kadar bekleyin...
          </Alert>
        ) : (
          ""
        )}
      </Form.Group>
    </Container>
  );
}
const putStateToProps = (state) => {
  return {
    state,
  };
};

const putDispatchToProps = (dispatch) => {
  return {
    putToken: (token,sid) => {
      return dispatch(actionTokenInfo(token,sid));
    },
  };
};

export default connect(putStateToProps, putDispatchToProps)(SignupPage);
