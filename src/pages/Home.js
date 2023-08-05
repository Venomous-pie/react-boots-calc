import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Button, Form, Container, Row, Col} from 'react-bootstrap';

const Home = () => {

    const [result, setResult] = useState('')
    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')
    
    const Add = () => {
       (isNaN(number1+number2)) ? (alert("Please enter a valid input"))
        : (() => {
            let sum = parseFloat(number1) + parseFloat(number2)
            setResult(sum)
        })();
    }
    
    const Sub = () => {
        (isNaN(number1+number2)) ? (alert("Please enter a valid input"))
        : (() => {
            let difference = parseFloat(number1) - parseFloat(number2)
            setResult(difference)
        })();
    }

    const Div = () => {
        (isNaN(number1+number2)) ? (alert("Please enter a valid input"))
        : (() => {
            let qoutient = parseFloat(number1) / parseFloat(number2)
            setResult(qoutient)
        })();
    }

    const Mult = () => {
        (isNaN(number1+number2)) ? (alert("Please enter a valid input"))
        : (() => {
            let product = parseFloat(number1) * parseFloat(number2)
            setResult(product)
        })();
    }
    


    return(
        <div className="Home">
            <Container fluid>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <h4>Result: {result}</h4>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>First Number</Form.Label>
                                <Form.Control size='sm' placeholder='0' value={number1} onChange={(e) => setNumber1(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Second Number</Form.Label>
                                <Form.Control size='sm' placeholder='0' value={number2} onChange={(e) => setNumber2(e.target.value)}/>
                            </Form.Group>
                        <Button variant='secondary' onClick={Add}>Add +</Button>{' '}
                        <Button variant='secondary' onClick={Sub}>Sub -</Button>{' '}
                        <Button variant='secondary' onClick={Div}>Div /</Button>{' '}
                        <Button variant='secondary' onClick={Mult}>Mult *</Button>{' '}
                        </Form>
                </Col>
                    <Col md={4}></Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Home