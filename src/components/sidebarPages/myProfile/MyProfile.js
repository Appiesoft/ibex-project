import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

const MyProfile = () => {
  return (
    <main className='main-container px-2'>
 <Row className="mx-auto">
            
            <Col lg={12} className=" bg-slate-100">
            <div className="bg-zinc-100 py-2 ps-3 text-black text-xl"><h1>Change Password</h1></div>
                 <Form className=" px-3 border-top bg-white">
                 <Form.Group md="4" controlId="validationCustom01">
                   <Form.Label className="  text-black mt-3 mb-2  text-black">Old Password</Form.Label>
                   <Form.Control
                     required
                     type="password"
                     placeholder="Email"
                     defaultValue="Mark"
                   />
                   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                 </Form.Group>
                 <Form.Group md="4" controlId="validationCustom01">
                   <Form.Label className="  text-black mt-3 mb-2">New Password</Form.Label>
                   <Form.Control required type="password" placeholder="New Password" />
                   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                 </Form.Group>
                 <Form.Group md="4" controlId="validationCustom01">
                   <Form.Label className="  text-black mt-3 mb-2">Confirm New Password</Form.Label>
                   <Form.Control
                     required
                     type="password"
                     placeholder="Confirm Password" 
                   />
                   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                 </Form.Group>
                 <button className="p-2 bg-cyan-500 text-white rounded-1 my-3 px-3">
                        Update
                       </button>
               </Form>
               <div className="bg-zinc-100 py-2 ps-3 mt-5  text-black text-xl"><h3>Personal Details</h3></div>
               <Form className=" px-3 border-top bg-white ">
               <Form.Group
                   md="4"
                   controlId="validationCustom01"
                   className="border-top"
                 >
                   <Form.Label className="  text-black mt-3 mb-2">First Name</Form.Label>
                   <Form.Control required type="text" placeholder="firstname" />
                   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                 </Form.Group>
                 <Form.Group md="4" controlId="validationCustom01">
                   <Form.Label className="  text-black mt-3 mb-2">Last Name</Form.Label>
                   <Form.Control required type="text" placeholder="lastname" />
                   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                 </Form.Group>
                 <Form.Group md="4" controlId="validationCustom01">
                   <Form.Label className="  text-black mt-3 mb-2">City</Form.Label>
                   <Form.Control required type="text" placeholder="city" />
                   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                 </Form.Group>
                 <Form.Group md="4" controlId="validationCustom01">
                   <Form.Label className="  text-black mt-3 mb-2">Address</Form.Label>
                   <Form.Control required type="text" placeholder="address" />
                   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                 </Form.Group>
                 <Form.Group md="4" controlId="validationCustom01">
                   <Form.Label className="  text-black mt-3 mb-2">Phone</Form.Label>
                   <Form.Control required type="text" placeholder="phone" />
                   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                 </Form.Group>
                 <button className="p-2 bg-cyan-500 text-white rounded-1 my-3 px-3">
                        Update
                       </button>
               </Form>
               </Col>
               </Row>
    </main>
  )
}

export default MyProfile
