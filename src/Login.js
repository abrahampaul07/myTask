import React , {useContext} from 'react'
import { useHistory } from 'react-router-dom';
import LoginContext from './Context/LoginContext'
import { Button, Container, Form } from 'react-bootstrap';

function Login() {
    const context = useContext(LoginContext);
    const history =useHistory();

    const login =(e)=>{
        e.preventDefault()
        console.log(context);
        history.push("/about");
        context.changeLogin(true)
        const email=document.getElementById("email").value;
        const password=document.getElementById("password").value;
        localStorage.setItem("Email",email)
        localStorage.setItem("Password",password)   
    }
    return (
        <div>
            <Container>
                <h3 className="mt-5 text-center">LOGIN</h3>
             <Form onSubmit={login}>
                    <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" id="email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" pattern="[A-Za-z0-9d.]{5,}" title="Uppercase letters and lowercase letters and numbers; at least 5 characters, but no limit." name="password" id="password"/>
                    </Form.Group>
                    <Button variant="primary" type="submit" id="login"> 
                        Submit
                    </Button>
                </Form>
                </Container>
        </div>
    )
}

export default Login
