import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer.js';

import './style.css';
class App extends React.Component{
    render(){
        return(
            <div className='main'>
                <Timer/>
            </div>
        )
    }
};
export default App;