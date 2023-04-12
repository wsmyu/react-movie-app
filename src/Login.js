import react, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ListGroup from 'react-bootstrap/ListGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';


function Login({user, setUser, currentUser, setCurrentUser}) {
    const [register, setRegister] = useState(false);

    const selectRegister = () => {
        setRegister(true);
    }

    const selectLogin = () => {
        setRegister(false);
    }

    const handleRegistration = () => {
        setRegister(false);
    };

    const addUser = (user) => {
        setUser((prevUsers) => [...prevUsers, user]);
    }

    return (
        <div>
            {!register ? (
                <LoginPage user={user} selectRegister={selectRegister} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            ) : (
                <Register selectLogin={selectLogin} handleRegistration={handleRegistration} user={user} setUser={setUser}  addUser={addUser}/>
            )}
        </div>
    );
}



function LoginPage(props) {
    const [errors, setErrors] = useState([]);
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const loginHandler = (e) => {
        const errorsTemp = [];
        e.preventDefault();
        if (!usernameInput) {
            errorsTemp.push("username");
        }
        if (!passwordInput) {
            errorsTemp.push("password");
        }
        setErrors(errorsTemp);

        if (errorsTemp.length === 0) {
            const matchedUser = props.user.find(u => u.username === usernameInput && u.password === passwordInput);
            if (matchedUser) {
                alert("Welcome back " + matchedUser.username + " !")
                props.setCurrentUser(matchedUser.username);

            } else {
                alert("Wrong username or password");
            }
        }
    }

    return (

        <div>
            {/* <h2>User Information</h2>
            <ul>
                {props.user.map((user) => (
                    <li key={user.username}>{user.fname} {user.lname}, {user.email}, {user.username},{user.password}</li>
                ))}
            </ul> */}
            <h2>Log in</h2>
            <Form.Group as={Row} className="mb-3" controlId="log-in">
                <Form.Label column sm="1">
                    Username:
                </Form.Label>
                <Col sm="2">
                    <Form.Control type="text" placeholder="Username" onChange={(e) => setUsernameInput(e.target.value)} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="log-in">
                <Form.Label column sm="1">
                    Password:
                </Form.Label>
                <Col sm="2">
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPasswordInput(e.target.value)} />
                </Col>
            </Form.Group>
            <div>Don't have an account? <Button variant="link" onClick={props.selectRegister}>Sign up here</Button></div>
            <Button variant="outline-primary" onClick={loginHandler}>
                LOGIN
            </Button>
        </div>
    );
}

function Register(props) {
    const [validated, setValidated] = useState(false);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const registerHandler = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            const newUser = {
                fname: fname,
                lname: lname,
                email: email,
                username: username,
                password: password
            };
            props.addUser(newUser)
            props.selectLogin();
        }
        setValidated(true);
    };

    return (
        <div>
            
            <Form noValidate validated={validated} onSubmit={registerHandler}>
                <Form.Group controlId="validationFname">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        onChange={(e) => setFname(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="validationLname">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        onChange={(e) => setLname(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="validationEmail">
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a email.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="validationUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="text"
                            placeholder="Please enter a username with at least 5 characters."
                            pattern=".{5,}"
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="validationPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="password"
                            placeholder="Please enter password with at least 8 characters with at least one uppercase, one lower case and one number."
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid password.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button type="submit">Register</Button>
            </Form>
        </div>
    );
}

export default Login;