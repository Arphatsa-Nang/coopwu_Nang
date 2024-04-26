
import React, { useState, useEffect } from "react";
import './App.css';
import ControlCard from './Components/ControlCard';
import { Card, CardContent, Input, Table, Button, LinearProgress } from "@mui/joy";
import _ from 'lodash';
import axios from 'axios';
// import Topbar from "./Components/Topbar";
import { useForm,Controller } from "react-hook-form";

export default function App() {
  // const titleArray = ['Banking', 'Logistic', 'E-Commerce', 'Computer'];
  // const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [isReady, setIsReady] = useState(false)
  const handleDeleteUser = (userId) => {
    
    axios
      .delete("process.env.REACT_APP_API_URL + '/user'" + userId)
      .then((res) => {
        getAllUser();
      })
      .catch((error) => {
        alert(error?.message);
        console.error("Error", error?.message);
      });
  };



  // useEffect(() => {
  //   alert(`You Search ${searchTerm}`);
  //   return () => {};
  // }, [searchTerm]);


  const getAllUser = () => {
    setIsReady(false);
    axios
      .get(`${process.env.REACT_APP_API_URL}/user`)
      .then((res) => {
        setUsers(res?.data?.rows);
        setIsReady(true);
        console.log("User ", res?.data?.rows);
      })
      .catch((error) => {
        console.error("Error", error?.message);
      });
  };


  useEffect(() => {
    getAllUser();
    return () => { };
  }, []);

  if (!isReady) {
    return (
      <div>
        <LinearProgress />
      </div>
    );
  }

  return (
    <div>
      {/* <Topbar appTitle='IARC Devboard' />{" "} */}
      <div className='min-h-screen'>
        <div className='flex justify-center '>
          <div className='lg:w-3/4'>
            <ControlCard/>
              <h3 className='font-bold'>User List</h3>
              <Table>
                <thead>
                  <tr>
                    <th>ลำดับที่</th>
                    <th>ชื่อ</th>
                    <th>แผนก</th>
                    <th>ดำเนินการ</th>
                  </tr>
                </thead>
                {_.map(users, (eachUser, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{eachUser?.name}</td>
                    <td>{eachUser?.department}</td>
                    <td>
                      <td>
                        <Button color='danger' onClick={() => handleDeleteUser(eachUser?._id)}>ลบ</Button>
                      </td>
                    </td>
                  </tr>
                ))}
              </Table>
            </div>
          </div>
        </div>

        {/* <footer className="text-mt-8">
          This Footer
        </footer> */}
      </div>
  );
}
