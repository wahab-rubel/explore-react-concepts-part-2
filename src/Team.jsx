import { useState } from "react"

export default function Team(){
 const [team, setTeam] = useState(0)

 const handleAddPlayer = () => {
  setTeam(team +1)
 }

 const handleRemovePlayer = () => {
   setTeam(team -1)
 }

 const teamStyle = {
  border: '1px solid purple',
  padding: '30px',
  borderRadius: '5px',
  margin: '10px',
  borderRadius: '15px'
 }
 return (
  <div style={teamStyle}>
   <h3>Player: {team}</h3>
   <button onClick={handleAddPlayer}>Add</button>
   <button onClick={handleRemovePlayer}>Remove</button>
  </div>
 )
}