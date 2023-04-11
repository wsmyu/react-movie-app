import react, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ListGroup from 'react-bootstrap/ListGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function Feedback() {
    const [page, setPage] = useState(1);
    const [feedbackData, setFeedbackData] = useState([]);
    const [personalData, setPersonalData] = useState([]);
    const [formData, setFormData] = useState([]);

    const nextPage = () => {
        setPage(page + 1);
    }

    const resetForm = () => {
        setPage(1);
    }

    const combineData = () => {
        setFormData({ ...feedbackData, ...personalData });
    }

    useEffect(() => {
        if (page === 3) {
            combineData();
        }
    }, [page]);

    const submitHandler = () => {
        setPage(0);
    }

    return (
        <Form className='feedbackForm'>
            {page === 1 ? <FeedbackForm nextPage={nextPage} setFeedbackData={setFeedbackData} /> : null}
            {page === 2 ? <PersonalInfoForm nextPage={nextPage} setPersonalData={setPersonalData} /> : null}
            {page === 3 ? <SummaryPage formData={formData} resetForm={resetForm} submitHandler={submitHandler} /> : null}
            {page === 0 ? <CompletedPage /> : null}
        </Form>
    );
}

function FeedbackForm(props) {
    const [rating, setRating] = useState('');
    const [favoriteGenre, setFavoriteGenre] = useState('');
    const [feedback, setFeedback] = useState('');
    const [errors, setErrors] = useState([]);

    const feedbackHandler = (e) => {
        var errorsTemp = [];
        e.preventDefault();
        if (!rating) {
            errorsTemp.push("rating");
        }
        if (!favoriteGenre) {
            errorsTemp.push("favoriteGenre");
        }
        setErrors(errorsTemp);

        if (errorsTemp.length === 0) {
            props.setFeedbackData({
                rating: rating,
                favoriteGenre: favoriteGenre,
                feedback: feedback
            });
            props.nextPage();
        }
    };

    return (
        <div>
            <div>
                <h2>We value your opinion!</h2>
                <div>Please let us know how we're doing by filling the form below.</div>
            </div>
            <h2>Part 1 - Feedback on our website</h2>
            <ProgressBar variant="danger" now={33} />
            <Form>
                <Form.Group class="form-group">
                    <Form.Label >How would you rate our website?</Form.Label>
                    <div>
                        <Form.Check
                            inline
                            type="radio"
                            label="1"
                            name="ratingOptions"
                            id="rating1"
                            value="1"
                            onChange={(e) => setRating(e.target.value)}
                            checked={rating === "1"}
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="2"
                            name="ratingOptions"
                            id="rating2"
                            value="2"
                            onChange={(e) => setRating(e.target.value)}
                            checked={rating === "2"}
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="3"
                            name="ratingOptions"
                            id="rating3"
                            value="3"
                            onChange={(e) => setRating(e.target.value)}
                            checked={rating === "3"}
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="4"
                            name="ratingOptions"
                            id="rating4"
                            value="4"
                            onChange={(e) => setRating(e.target.value)}
                            checked={rating === "4"}
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="5"
                            name="ratingOptions"
                            id="rating5"
                            value="5"
                            onChange={(e) => setRating(e.target.value)}
                            checked={rating === "5"}
                        />
                    </div>
                    {errors.includes("rating") && <div id="error">Please select an option!</div>}
                </Form.Group>

                <Form.Group class="form-group">
                    <Form.Label>Which is your favourite genre?</Form.Label>
                    <Form.Select
                        name="favoriteGenre"
                        onChange={(e) => setFavoriteGenre(e.target.value)}
                    >
                        <option value="" disabled selected>
                            --Please select one--
                        </option>
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Animation">Animation</option>
                        <option value="Crime">Crime</option>
                        <option value="Documentary">Documentary</option>
                        <option value="Family">Family</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="History">History</option>
                        <option value="Horror">Horror</option>
                        <option value="Music">Music</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Romance">Romance</option>
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Thriller">Thriller</option>
                        <option value="War">War</option>
                    </Form.Select>
                    <div>{errors.includes("favoriteGenre") && <div id="error">Please select an option!</div>}</div>
                </Form.Group>
                <Form.Group class="form-group">
                    <label for="feedbackTextArea">Feedback</label>
                    <textarea
                        class="form-control"
                        id="feedbackTextArea"
                        placeholder="Enter your feedback here"
                        rows="4"
                        onChange={(e) => setFeedback(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={feedbackHandler}>Next</Button>
            </Form>
        </div>
    );
}

function PersonalInfoForm(props) {
    const [errors, setErrors] = useState([]);
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const personalInfoHandler = (e) => {
        const errorsTemp = [];
        e.preventDefault();
        if (!gender) {
            errorsTemp.push("gender");
        }
        if (!age) {
            errorsTemp.push("age");
        }
        if (!name) {
            errorsTemp.push("name");
        }
        if (!email) {
            errorsTemp.push("email");
        }
        setErrors(errorsTemp);

        if (errorsTemp.length === 0) {
            props.setPersonalData({
                gender: gender,
                age: age,
                name: name,
                email: email
            });
            props.nextPage();
        }
    }

    return (
        <div>
            <h2>Part 2 - Personal Information</h2>
            <ProgressBar variant="warning" now={66} />
            <Form>
                <Form.Group class="form-group">
                    <Form.Label>Gender:</Form.Label>
                    <Form.Check
                        inline
                        type="radio"
                        label="Male"
                        name="genderOptions"
                        id="gender1"
                        value="Male"
                        onChange={(e) => setGender(e.target.value)}
                        checked={gender === "Male"}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Female"
                        name="genderOptions"
                        id="gender2"
                        value="Female"
                        onChange={(e) => setGender(e.target.value)}
                        checked={gender === "Female"}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Other"
                        name="genderOptions"
                        id="gender3"
                        value="other"
                        onChange={(e) => setGender(e.target.value)}
                        checked={gender === "other"}
                    />
                    <div>{errors.includes("gender") && <div id="error">Please select an option!</div>}</div>
                </Form.Group>

                <Form.Group class="form-group">
                    <Form.Label>Age:</Form.Label>
                    <Form.Check
                        type="radio"
                        label="Under 12 years old"
                        name="ageOptions"
                        id="age1"
                        value="<12"
                        onChange={(e) => setAge(e.target.value)}
                        checked={age === "<12"}
                    />
                    <Form.Check
                        type="radio"
                        label="12-17 years old"
                        name="ageOptions"
                        id="age2"
                        value="12-17"
                        onChange={(e) => setAge(e.target.value)}
                        checked={age === "12-17"}
                    />
                    <Form.Check
                        type="radio"
                        label="18-24 years old"
                        name="ageOptions"
                        id="age3"
                        value="18-24"
                        onChange={(e) => setAge(e.target.value)}
                        checked={age === "18-24"}
                    />
                    <Form.Check
                        type="radio"
                        label="25-34 years old"
                        name="ageOptions"
                        id="age4"
                        value="25-34"
                        onChange={(e) => setAge(e.target.value)}
                        checked={age === "25-34"}
                    />
                    <Form.Check
                        type="radio"
                        label="35-44 years old"
                        name="ageOptions"
                        id="age5"
                        value="35-44"
                        onChange={(e) => setAge(e.target.value)}
                        checked={age === "35-44"}
                    />
                    <Form.Check
                        type="radio"
                        label="45-54 years old"
                        name="ageOptions"
                        id="age6"
                        value="45-54"
                        onChange={(e) => setAge(e.target.value)}
                        checked={age === "45-54"}
                    />
                    <Form.Check
                        type="radio"
                        label="55-64 years old"
                        name="ageOptions"
                        id="age7"
                        value="55-64"
                        onChange={(e) => setAge(e.target.value)}
                        checked={age === "55-64"}
                    />
                    <Form.Check
                        type="radio"
                        label="65 years or older"
                        name="ageOptions"
                        id="age8"
                        value=">65"
                        onChange={(e) => setAge(e.target.value)}
                        checked={age === ">65"}
                    />
                    <div>{errors.includes("age") && <div id="error">Please select an option!</div>}</div>
                </Form.Group>

                <Form.Group class="form-group Name">
                    <FloatingLabel
                        controlId="formBasicName"
                        label="Name"
                        className="Name"
                    >
                        <Form.Control type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                    </FloatingLabel>
                    <div>{errors.includes("name") && <div id="error">Please fill in your name!</div>}</div>
                </Form.Group>

                <Form.Group class="form-group Email">
                    <FloatingLabel
                        controlId="formBasicEmail"
                        label="Email address"
                        className="Email"
                    >
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        <div>{errors.includes("email") && <div id="error">Please fill in your email!</div>}</div>
                    </FloatingLabel>
                </Form.Group>

                <Button variant="primary" onClick={personalInfoHandler}>
                    Next
                </Button>
            </Form>
        </div>

    );
}

function SummaryPage(props) {
    return (
        <div>
            <h2>Part 3 - Summary Page</h2>
            <ProgressBar variant="warning" now={100} />
            <div class="form-group">
                <ListGroup as="ol" numbered>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Rating</div>
                            {props.formData.rating}
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Favorite genre</div>
                            {props.formData.favoriteGenre}
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Feedback</div>
                            {props.formData.feedback}
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Gender</div>
                            {props.formData.gender}
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Age</div>
                            {props.formData.age}
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Name</div>
                            {props.formData.name}
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Email</div>
                            {props.formData.email}
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <Button variant="outline-danger" onClick={props.resetForm}>Cancel</Button>
            <Button variant="primary" onClick={props.submitHandler}>
                Submit
            </Button>
        </div>
    );
}

function CompletedPage() {
    return (
        <div>
            <h2>Completed!</h2>
            <ProgressBar variant="success" now={100} />
            Thank you for your response! Your feedback has been submitted.
        </div>
    );
}

export default Feedback;