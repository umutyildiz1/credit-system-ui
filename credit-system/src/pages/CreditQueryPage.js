import React,{useState,useEffect} from "react";
import { Container, Col, Row, ListGroup, Button } from "react-bootstrap";
import CreditService from "../services/CreditService";
import CustomerService from "../services/CustomerService";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function CreditQueryPage(props) {
  const creditService = new CreditService()
  const customerService = new CustomerService()
  const [creditResponse,setCreditResponse] = useState({})
  const [customer,setCustomer] = useState({})
  const history = useHistory()

  const {sid, token} = props.state
  const {creditLimit, message} = creditResponse
  const {customerName, surname} = customer
  const styleSpan = {
    color : "#0000FF"
  }
  
    useEffect(() => {
      creditService.query(sid,token).then((response) => setCreditResponse(response.data))
      customerService.get(sid,token).then((response) => setCustomer(response.data))
    }, [])
    

    let onClickBack = (event) =>{
event.preventDefault()
      history.push("/")
    }

  return (
    <Container className="w-25">
      <Col>
        <Row className="text-center">
          <h2>Kredi Sonucu Sayfası</h2>
        </Row>
      </Col>
      <Col>
        <ListGroup>
        <ListGroup.Item>
            <p>Müşteri İsmi : <span style={styleSpan}>{customerName}</span></p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>Müşteri Soyismi : <span style={styleSpan}>{surname}</span></p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>Kredi Sonucu : <span style={styleSpan}>{message}</span></p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>Kredi Limiti : <span style={styleSpan}>{creditLimit}</span></p>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col  className="mt-3">
      <Row>
        <Button onClick={onClickBack}>Geri Dön</Button>
        </Row>
      </Col>
    </Container>
  );
}
const putStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(putStateToProps)(CreditQueryPage);
