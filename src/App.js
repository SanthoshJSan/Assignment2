import {useState} from 'react'
import './App.css';

let places={
              Bangalore:["Wonderla","Nandhi Hills","Snow City","UB City","Brigade Road"],
              Hyderabad:["Charminar","Golconda Fort","Ntr Garden","Nehru Zoological Park","Lumbini Park"],
              Mumbai:["Gateway of India","Sanjay Gandhi National Park","Red Carpet Wax Museum","Elephanta Caves","Shri Mahalakshmi Temple"]
            }

let data=["Wonderla","Nandhi Hills","Snow City","UB City","Brigade Road",
          "Charminar","Golconda Fort","Ntr Garden","Nehru Zoological Park","Lumbini Park",
          "Gateway of India","Sanjay Gandhi National Park","Red Carpet Wax Museum",
          "Elephanta Caves","Shri Mahalakshmi Temple"];

let display=data;


function App() {
  const [city,setCity]=useState(["Bangalore","Hyderabad","Mumbai"]);
  var c=1;
  console.log(display);


  let onChangeCity=(event)=>{
                              setCity(new Array(event.target.value));
                             }
  let onChangePlace=(event)=>{
                                setCity(new Array(event.target.value));
                              }
  

  return (
    <div className="App">
      <div>
          <select onChange={onChangeCity}>
              <option selected value="Selected All">Select All</option>
              <option value="Bangalore">Bangalore</option>
              <option  value="Hyderabad">Hyderabad</option>
              <option value="Mumbai">Mumbai</option>
          </select>
      

      {
        (()=>{
            if(city.length===1){
                  if(city[0]==="Bangalore")
                          display=places.Bangalore;
                  else if(city[0]==="Hyderabad")
                          display=places.Hyderabad;
                  else if(city[0]==="Mumbai")
                          display=places.Mumbai;
                  else if(city[0]==="Selected All"){
                                                    setCity(["Bangalore","Hyderabad","Mumbai"]);
                                                    display=data;
                                                    }
           }})()
      }

  <select onChange={onChangePlace}>
    <option value="" selected hidden ></option>
    {
      display.map((item,index)=><option value={item}>{item}</option>)
      }
      </select>
    </div>

      {
        (()=>{
      if(city.length===3){
        return (<table>
          <tbody >
          <tr><td>Bangalore</td><td className=""><table className="insideTable"> 
          {places.Bangalore.map((item,index)=>
           <tr id={"row"+c++} className="insideTableRow">{item} 
           </tr> )
           }</table> </td></tr> 

           <tr><td>Hyderabad</td><td className=""><table className="insideTable">  {(()=>{c=1})()}
                                  {places.Hyderabad.map((item,index)=>
                                   <tr id={"row"+c++} className="insideTableRow">{item} 
                                      </tr>)
                                   }  </table></td></tr>
           <tr><td>Mumbai</td><td className="">{(()=>{c=1})()}<table className="insideTable"> 
                                   {places.Mumbai.map((item,index)=>
                                     <tr id={"row"+c++} className="insideTableRow">{item} 
                                       </tr>)
                                    }  </table></td></tr>                    
          </tbody>
        </table>)
      }
      else
      {return(
      city.map((item,index)=>
      <table>
        {/*table head*/}
       
        {/*table body*/}
        <tbody>
                    {
                      (()=>{
                            if(item==="Bangalore")
                                return (<tr><td>Bangalore</td><td>
                                  {places.Bangalore.map((item,index)=>
                                   <tbody className="insideTableBody"> <tr id={"row"+c++} className="insideTableRow">{item} 
                                      </tr> </tbody>)
                                   } </td></tr> )
                            else if(item==="Hyderabad"){
                                c=1;
                                return (
                                <tr><td>Hyderabad</td><td>
                                  {places.Hyderabad.map((item,index)=>
                                   <tbody className="insideTableBody"> <tr id={"row"+c++} className="insideTableRow">{item} 
                                      </tr> </tbody>)
                                   } </td></tr>)}
                            else if(item==="Mumbai"){c=1;
                                return (<tr><td>Mumbai</td><td>
                                  {places.Mumbai.map((item,index)=>
                                   <tbody className="insideTableBody"> <tr id={"row"+c++} className="insideTableRow">{item} 
                                      </tr> </tbody>)
                                   } </td></tr>)}
                            
                            else 
                                return (<tr><td className="">{item}</td></tr>)})()
                    }
        </tbody>
        {/*table body*/}
        
      </table>))}
        })()
      }
    </div>
  );
}

export default App;
