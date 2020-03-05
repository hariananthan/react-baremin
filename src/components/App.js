import React,{useState} from "react";

import "../styles/stylesheet.css";


function App(){
  const [open, setOpen] = useState(false);
 
  return(
    
    <div className="app" onClick={()=>setOpen(!open)}>
      <div className={open?"overlay-display":"overlay"}>
        <h3 className="sub-title">SIZE OF CREATE-REACT-APP </h3>
        <div className="progress">
          <div className="progress-bar-1" >
            <b>135 MB</b>
          </div>
        </div><br/>

        <h3 className="sub-title">SIZE OF REACT-BARE-MIN </h3>

        <div className="progress">
          <div className="progress-bar-2" >
            <b> 48.6 MB  </b>
          </div>
        </div><br/><br/>

        <h3 className="sub-title">THAT'S <u>64%</u> LESS!</h3>
      </div>  

      <div className={open?" app-body app-body-resized":"app-body"}> 
        <h1>React Bare-min</h1>
        <img className="image" src="https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png"/><br/>
        <h4 className="sub-title">The bare minimum code to setup React</h4>
      </div>
    </div>
  );

}
export default App;