import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <>
      <div className="container mt-5 d-flex justify-content-center align-item-center bg-info ">

        <Form>
          <h1 className='p-5'>Welcome to DASRARUS@click</h1>
          <Form.Group className="mb-5" controlId="formBasicEmail">
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
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="dark" type="submit" className='mb-3'>
            Log In
          </Button>
        </Form>
      </div>

    </>

  );
}

export default Login;