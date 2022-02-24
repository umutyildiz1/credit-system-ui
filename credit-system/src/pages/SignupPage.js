import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Input from '../components/Input'
import UserService from '../services/UserService'
import CustomerService from '../services/CustomerService'
import { connect } from "react-redux";
import { actionTokenInfo } from '../redux/ActionCreator';


function SignupPage(props) {//sid,customerName,surname,salary,phoneNumber,?creditScore,credit-null

    const [id, setid] = useState("")
    const [customerName, setcustomerName] = useState("")
    const [surname, setsurname] = useState("")
    const [salary, setsalary] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")

    const {putToken} = props

    let onChange = (event) => {
        const {name, value} = event.target
        
        switch(name){
            case "customerName":
                setcustomerName(value)
                break;
            case "id":
                setid(value)
                break;
            case "surname":
                setsurname(value)
                break;
            case "salary":
                setsalary(value)
                break;
            case "phoneNumber":
                setphoneNumber(value)
                break
        }
        
    }


    let onClickSignUp = async(event) => {
        event.preventDefault()
        let userService = new UserService()
        let sid = parseInt(id)
        let request = {
            sid,
            username:id,
            password:id
            
        }
        let token;
        let user = await userService.getUser(sid)
        if(user.data.sid == null){
            token = await userService.create(request)
            token= token.data
        }
        token = await userService.login(request)
        token= token.data
        putToken(token)
        let numSalary = parseInt(salary)
        let requestCustomer = {
            sid,
            customerName,
            surname,
            phoneNumber,
            salary:numSalary,
            credit:null,
            creditScore:0
        }
        let customerService = new CustomerService()
        await customerService.create(requestCustomer,token)
    }

  return (
    <Container className='w-25'>
        <Col>
        <Row className='text-center'>
            <h3>Kredi Başvuru Ekranı</h3>
        </Row>
        </Col>
        <Form>
            <Input name = "id" label ="Kimlik Numarası" onChange={onChange} placeholder = "11 haneli olmalıdır"/>
            <Input name = "customerName" label = "Müşteri Adı" onChange={onChange}/>
            <Input name = "surname" label= "Müşteri Soyadı" onChange={onChange}/>
            <Input name = "salary" label= "Aylık Gelir" onChange={onChange}/>
            <Input name = "phoneNumber" label= "Telefon Numarası" onChange={onChange} placeholder = "11 haneli olmalıdır"/>
        </Form>
        <Form.Group className='text-center mt-3'>
            <Button onClick={onClickSignUp}>Kredi Sonucunu Göster</Button>
        </Form.Group>
    </Container>
  )
}
const putStateToProps = state => {
    return {
      state 
    }
  }

const putDispatchToProps = (dispatch) =>{
    return {
      putToken : (token) => {
        return dispatch(actionTokenInfo(token))
      }
    }
  }

export default connect(putStateToProps,putDispatchToProps)(SignupPage);