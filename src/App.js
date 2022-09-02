import axios from "axios";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


import ListGroupWithHeaderExample from "./component/Card";

const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const [ listOfUSer, setlistOfUSer] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setlistOfUSer(response.data);
    });
  }, []);

  if (! listOfUSer) return null;

  return (
    <div style={{ backgroundColor:"mediumaquamarine"}}>
    <div className="container" style={{display:"flex",flexWrap:"wrap", justifyContent:"space-around" ,backgroundColor:"mediumaquamarine"  }}>{ listOfUSer.map(e=><div>
      <ListGroupWithHeaderExample el={e} />
      
      </div>
    )}
 
    </div>
    </div>
  );
}