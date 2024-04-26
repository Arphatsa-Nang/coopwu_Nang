import React, {useState,useEffect} from "react";
// import './App.css';
import ControlCard from './Components/ControlCard';
import { Card, CardContent, Input } from "@mui/joy";
import axios from 'axios';
import _ from 'lodash';

export default function App() {
  const titleArray = ['Banking','Logistic', 'E-Commerce','Computer'];
  const [searchTerm, setSearchTerm] = useState("");
  const [starWarPeople, setStarWarPeople] = useState([]);
  
  // useEffect(() => {
  //   alert(`You Search ${searchTerm}`);

  //   return () => {};
  // }, [searchTerm]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((res) => {
        setStarWarPeople(res.data);
        console.log("People ", res.data);
      })
      .catch((error) => {
        console.error("Error", error?.message);
      });
  
    return () => {};
  }, []);

  return (
    <div> 
        <Card>
        <CardContent>
          <div>Search Box</div>
          <Input
            placeholder='Input Some Search Word'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div>
            You Search <span className='text-blue-500'>{searchTerm}</span>
          </div>
        </CardContent>
      </Card>
          
      {/* <header className="text-black">
        Monitoring System
      </header>  */}
  
      {/* <div className='tex-xl mx-4 my-2'> People in Starwar
        {titleArray.map(eachTitle => (
          <div className="p-4" key={eachTitle}> 
            <ControlCard title={eachTitle} />
          </div>
        ))} */}

      <div className='tex-xl mx-4 my-2'> People in Starwar  </div>
      <div className="mx-4">
      {_.map(starWarPeople, (eachPeople, index) => (
       <Card key={index} className='my-2'>
         <CardContent>
           <div className='flex'>
               <div className='w-1/3'></div>
                <div className='w-2/3'>
                    <li>Name: {eachPeople?.name}</li>
                    <li>Username: {eachPeople?.username}</li>
                    <li>Email: {eachPeople?.email}</li>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {titleArray.map(eachTitle => (
         <ControlCard title={eachTitle} />
        ))}

      <footer className="text-mt-8">
        This Footer
      </footer>
    </div>
  );
}


// export default function App() {
//   const titleArray = ['Banking', 'Logistic', 'E-Commerce', 'Computer'];

//   // return (
//   //   <div>
//   //     {/* Adds margin-top to create space below the Topbar */}
//   //     <header className="text-black">
//   //       Monitoring System
//   //     </header>
//   //     <div className="text-black">
//   //       {titleArray.map(eachTitle => (
//   //         <div className="p-4" key={eachTitle}>
//   //             <ControlCard title={eachTitle} />
//   //         </div>
//   //       ))}
//   //     </div>
//   //     {/* Footer */}
//   //     <footer className="text-black mt-8">
//   //       This is Footer
//   //     </footer>
//   //   </div>
//   // );
// }