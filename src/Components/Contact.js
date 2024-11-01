import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./contact.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [inputvalue, setInputvalue] = useState({
    fname: "",
    address: "",
    email: "",
    mobile: "",
    message: "",
  });

  const getvalue = (e) => {
    const { name, value } = e.target;
    setInputvalue(() => {
      return {
        ...inputvalue,
        [name]: value
      }
    });
  };

  const sentUserdata = async (e) => {
    e.preventDefault();

    const { fname, address, email, mobile, message } = inputvalue;
    if (fname === "") {
      toast.error("Name is required");
    } else if (address === "") {
      toast.error("Address is required");
    } else if (email === "") {
      toast.error("Email is required");
    } else if (!email.includes("@")) {
      toast.error("Invalid email");
    } else if (mobile === "") {
      toast.error("Mobile number is required");
    } else {
      const res = await fetch("http://localhost:6002/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fname, email, mobile, address, message
        })
      });
      const data = await res.json();

      if (data.status === 201) {
        toast.success("Your Response Submitted");
        setInputvalue({
          fname: "",
          address: "", 
          email: "",
          mobile: "",
          message: "" 
        });
      }
    }
  };

  return (
    <>
      <div className="container mb-3 contact">
        <h2 className='text-center'>Contact Us</h2>
        <div className="container mt-2">
          <Form className='row mt-2' onSubmit={sentUserdata}>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name='fname' value={inputvalue.fname} onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" name='address' value={inputvalue.address} onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name='email' value={inputvalue.email} onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicMobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" name='mobile' value={inputvalue.mobile} onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} name="message" value={inputvalue.message} onChange={getvalue} />
            </Form.Group>
            <div className='d-flex justify-content-center'>
              <Button variant="primary" className='col-lg-6' type="submit">
                Submit
              </Button>
            </div>
          </Form>
          <ToastContainer />
        </div>
      </div>
    </>
  )
}

export default Contact
