import React, { useState } from "react";
import JASONDATA from "./MOCK_DATA.json"

function App() {

    const [searchTerm, setSearchTerm] = useState("");
    return <div className="App">
        <input 
        type="text" 
        placeholder="search..."
        onChange={(event) => {
            setSearchTerm(event.target.value);
        }}
        />
        {JASONDATA.filter((val) => {
            if(searchTerm == "") {
                return val;
            } else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }// This (JASONDATA.filter) is an array itself which is traversed by the map function.
        }).map((val, key) => {
            return (
                <div className="user" key={key}>
                <p>{val.first_name}</p>
                </div>
            )
        })}
    </div>
}

export default App;


/*import React, { useState } from "react";
import JASONDATA from "./MOCK_DATA.json"

function App() {
    
    const [searchItem, setSearchItem] = useState("");

    return <div className="App">
        <input 
            type="text"
            placeholder="search..."
            onChange={(event) => {
                setSearchItem(event.target.value)  
            }}
        />
              
         {JASONDATA.filter((val) => {
            if(searchItem === "") {
                return val;
            } else if(val.first_name.toLowerCase().includes(searchItem.toLowerCase())) {
                return val;
            }
        }).map((val, key) => {
            return (
                <div className="user" key={key}>
                    <p>{val.first_name}</p>
                </div> 
            )
        })}

        
    </div>
}
 export default App;*/