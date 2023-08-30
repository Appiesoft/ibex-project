import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

const EditPrimaryAgents = () => {
  return (
    <main className='main-container px-2'>
    <Row className="mx-auto">
               
               <Col lg={12} className=" bg-slate-100">
               <div className="bg-zinc-100 py-2 ps-3 text-black"><h3>Update Primary Agent Details</h3></div>
                    <Form className=" px-3 border-top bg-white">
                    <Form.Group md="4">
                      <Form.Label className="  text-black mt-3 mb-2  text-black">Primary Agent Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="name"
                     
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group md="4">
                      <Form.Label className="  text-black mt-3 mb-2  text-black">Primary Agent Email</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Email"
                        
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
             
                    <Form.Group md="4">
                      <Form.Label className="  text-black mt-3 mb-2  text-black">Primary Agent Phone Number</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        placeholder="number"
                     
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group md="4">
                      <Form.Label className="  text-black mt-3 mb-2  text-black">Primary Agent Phone Country</Form.Label>
                      <Form.Select
                                          name="country"
                                          defaultValue="Choose..."
                                        >
                                          <option hidden>--select country--</option>
                                          <option value="1">Swinburne</option>
                                          <option value="2">Swinburne</option>
                                        </Form.Select>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group md="4">
                      <Form.Label className="  text-black mt-3 mb-2  text-black">Primary Agent City</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="city"
                     
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Row className="my-3 me-2">
                          <Col className="d-flex justify-content-end">
                            <button className="p-2 bg-zinc-300 text-black rounded-1 text-lg px-3">
                             Cancel
                            </button>
                            <button className="p-2 bg-cyan-500 text-white rounded-1 text-lg ms-2">
                            Update
                            </button>
                          </Col>
                        </Row>
                  </Form>
                 
                  </Col>
                  </Row>
       </main>
  )
}

export default EditPrimaryAgents
