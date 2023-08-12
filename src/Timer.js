import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

var interval;

class Timer extends React.Component{
    constructor(){
        super();
        this.state={
            time:10
        }
    }
    startinterval=()=>{
        interval=setInterval(()=>
        this.setState({
            time:this.state.time-1
        })
        ,1000)
    }
    stopinterval=()=>{
        clearInterval(interval);
    }
    
    componentDidMount(){
        this.startinterval();
    }
    componentDidUpdate(){
        if(this.state.time==0){
            this.stopinterval()
        }
    }
    render(){
        return(
        <>
            <h1 className='time'>
                {this.state.time}
            </h1>
            <div>
                <span className='butten' onClick={this.startinterval}>start</span>
                <span className='butten' onClick={this.stopinterval}>stop</span>
            </div>
        </>
        )
    }
};
export default Timer;