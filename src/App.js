import React, { useState } from 'react';
import './App.css'

const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", 
"Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
"Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
 "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
"Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

function App(){
  const [error,setError]=useState('');
  const [players, setPlayers] = useState([]);
  // const [addlist, setAddlist] = useState(['1'])
  const [all, setAll]=useState([])
  const [player, setPlayer] = useState({
    id:'',
    name: '',
    age: '',
    role: '',
    state: '',
  });

  // field values 
  const handleInputChange = (event) => {
    setPlayer({
      ...player,
      [event.target.name]: event.target.value,
      id : Math.floor(Math.random()*1000)
    });
  };

// Validation
  const validate = ()=>{
    if(player.name == "" ||player.age == "" ||player.role == "" ||player.state == ""){
      setError("Please fill all the fields")
      return false
    }
    setError('')
    return true
  }

  // add players to list
  const addPlayer = (event) => {
    event.preventDefault();
    const isValid = validate()
   
    if(isValid){
      setPlayers([...players, player]);
      setPlayer({
        name: '',
        age: '',
        role: '',
        state: ''
      });
 
    // setAddlist([...addlist, '']);
    // let newfield = {
    //   name: '',
    //   age: '',
    //   role: '',
    //   state: ''
    // };
    // setAddlist([...players, newfield]);
   }
  };
  
  // delete players list
  const deletePlayer = (e, id) => {
    e.preventDefault();
    setPlayers(players.filter((t)=>t.id != id))
  };

  // const saveAll= (e)=>{
  // e.preventDefault()
  // setAll(players)
  // setPlayer({
  //   name: '',
  //   age: '',
  //   role: '',
  //   state: ''
  // });
  // }

  // console.log(addlist)
  // console.log("hi",players)
  return (
    <>
      <h1>Cricket Player Information</h1>
      <form className="playersForm">
        <input
          type="text"
          placeholder="Enter player name"
          required
          name="name"
          value={player.name}
          onChange={handleInputChange} /><input
            type="text"
            placeholder="Enter player age"
            name="age"
            value={player.age}
            onChange={handleInputChange} /><select
              name="role"
              value={player.role}
              onChange={handleInputChange}
            >
            <option value="" disabled>
              Select role
            </option>
            <option value="Batsman">Batsman</option>
            <option value="Bowler">Bowler</option>
            <option value="Wicket Keeper">Wicket Keeper</option>
            <option value="All Rounder">All Rounder</option>
          </select><select
            name="state"
            value={player.state}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select state
            </option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select><button className="addPlayers" onClick={addPlayer}>+</button>
      </form>
      {/* <button className="Allvalue" onClick={saveAll}>Save All</button> */}
      <p className="error">{error}</p>
      <h3>List of Cricket Players</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Role</th>
            <th>State</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p, index) => (
            <tr key={index}>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.role}</td>
              <td>{p.state}</td>
              <td><button onClick={(e)=>deletePlayer(e,p.id)} className="deletebtn">Delete</button></td>
            </tr>
          ))}
        </tbody>
        </table>
      </>
  )}
  export default App

                
