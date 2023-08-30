// import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from './components/dashboard/Dashboard';
// import Main from './components/main/Main';

// import './App.css'
// import MyProfile from './components/sidebarPages/myProfile/MyProfile';
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Dashboard />}>
//           <Route index element={<Main />} />
//           <Route path="my-profile" element={<MyProfile />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from 'react'
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Dashboard/>
      </BrowserRouter>
    </div>
  )
}

export default App

