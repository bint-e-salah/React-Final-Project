import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Signup() {
  return (
    <>
      <div className="container mt-5 d-flex justify-content-center align-item-center bg-info ">

        <Form>
          <h1 className='d-flex justify-content-center align-item-center mt-5  fw-bold'>SIGNUP</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="First Name" placeholder="Enter First Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="email" placeholder="Enter Last Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Rewrite Password" />
          </Form.Group>

          
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          
          <Button className="mb-5" variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </div>

    </>

  );
}

export default Signup;