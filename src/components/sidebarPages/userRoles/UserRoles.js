import React from 'react'
import './UserRoles.css'
import { Table } from 'react-bootstrap'
const UserRoles = () => {
  return (
    <>
     <main className="main-container">
     <div class="mb-4">
            <form id="add-role-form" class="d-flex align-items-start">
                <div>
                    <input type="text" class="form-control " name="name" placeholder="Role Name"  />
                </div>
                <button className="p-2 ms-3 bg-cyan-500 text-white rounded-1 text-sm">
                <i class="fa fa-plus me-2"></i>
                    Add       
              </button>
                
            </form>
        </div>
     <Table striped bordered className="mt-3">
            <thead>
              <tr>
                <th>Role Name</th>
                <th># of users with this role</th>
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>admissions</td>
                <td>2</td>
              </tr>
              <tr>
                <td>admissions</td>
                <td>2</td>
              </tr>
              <tr>
                <td>admissions</td>
                <td>2</td>
              </tr>
              <tr>
                <td>admissions</td>
                <td>2</td>
              </tr>
            </tbody>
           
          </Table>
      </main>
    </>
  )
}

export default UserRoles
