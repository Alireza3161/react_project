import React,{useState} from 'react';
// import ReactDOM from 'react-dom';
import Timer from './Timer.js';

import { testContext } from './testContext.js';

import './style.css';

// import Timelist from './Timelist.jsx';

const App=()=>{

    const [timeArr,setTimeArr]=useState(["00 : 00 : 01","00 : 12 : 05"])



    return(
        <testContext.Provider value={{timeArr:timeArr,
        setTimeArr:setTimeArr
        }} >
            <div className='main'>


            <Timer/>
            

            </div>
    </testContext.Provider>
    )
}
export default App;