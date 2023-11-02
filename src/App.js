import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import Login from './Login/Login';
import { Route, Routes } from 'react-router-dom';
import UserList from './Users/UserList';
import Portal from './Portal/Portal';
import CreateUser from './Users/CreateUser';
import UserView from './Users/UserView';
import EditUser from './Users/EditUser';


function App() {
  const [data, setData] = useState([
    {
      id: 2023,
      name: "James",
      email: "jamesfrost@gmail.com",
      role: "fullsatckdeveloper",
      salary: "110000"
    },
    {
      id: 2020,
      name: "Hillary",
      email: "highhill@gmail.com",
      role: "software Engineer",
      salary: "500000"
    }
  ])
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path="/portal" element={<Portal />}>
        <Route path="userlist" element={<UserList data={data} setData={setData} />} />
        <Route path="createuser" element={<CreateUser data={data} setData={setData} />} />
        <Route path="userview/:id" element={<UserView data={data} />} />
        <Route path="edituser/:id" element={<EditUser data={data} />} />
      </Route>
    </Routes>
  );
}

export default App;
