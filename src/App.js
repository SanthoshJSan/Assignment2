import {useState} from 'react'
import './App.css';

let places={
  Bangalore:["Wonderla","Nandhi Hills","Snow City","UB City","Brigade Road"],
  Hyderabad:["Charminar","Golconda Fort","Ntr Garden","Nehru Zoological Park","Lumbini Park"],
  Mumbai:["Gateway of India","Sanjay Gandhi National Park","Red Carpet Wax Museum","Elephanta Caves","Shri Mahalakshmi Temple"]
}
function App() {
 
  let data=["Wonderla","Nandhi Hills","Snow City","UB City","Brigade Road",
  "Charminar","Golconda Fort","Ntr Garden","Nehru Zoological Park","Lumbini Park",
  "Gateway of India","Sanjay Gandhi National Park","Red Carpet Wax Museum",
  "Elephanta Caves","Shri Mahalakshmi Temple"];
  const [display,setDisplay]=useState(data);
  const [city,setCity]=useState(["Bangalore","Hyderabad","Mumbai"]);
  let onChangeCity=(event)=>{
  setCity([event.target.value]);
  if(city[0]==="Bangalore")
  setDisplay(places.Bangalore);
  else if(city[0]==="Hyderabad")
  setDisplay(places.Hyderabad);
  else
  setDisplay(places.Mumbai);
  }
  return (
    <div className="App">
      <div>
      <select onChange={onChangeCity}>
      <option selected hidden value=""></option>
        <option value="Bangalore">Bangalore</option>
        <option  value="Hyderabad">Hyderabad</option>
        <option value="Mumbai">Mumbai</option>
      </select></div>
      <div><select>{
      display.map((item,index)=><option value={item}>{item}</option>)}
      </select></div>

      {city.map((item,index)=>
      <table>
        <th>{item}</th>
        <tbody>
          {(()=>{if(item==="Bangalore")
          return (places.Bangalore.map((item,index)=><tr><td className="">{item}</td></tr>))
          else if(item==="Hyderabad")
          return (places.Hyderabad.map((item,index)=><tr><td className="">{item}</td></tr>))
          else
          return (places.Mumbai.map((item,index)=><tr><td className="">{item}</td></tr>))
      })()}
        </tbody>
      </table>)}
    </div>
  );
}

export default App;
