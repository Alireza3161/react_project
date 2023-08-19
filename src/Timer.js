// import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react';
// import ReactDOM from 'react-dom';
import Timelist from './Timelist';
import './style.css';
import { testContext } from './testContext';

var interval;

class Timer extends React.Component{
    constructor(){
        super();
        this.state={
            houres:0,
            min : 0,
            secend :0,
            isstart:false
        }
    }

    static contextType = testContext;


    startinterval=()=>{
        if(this.state.isstart === false){
            this.setState({
                isstart : true
            })
            interval=setInterval(() => {
                this.setState({
                    secend:this.state.secend + 1
                })
                if(this.state.secend === 60 ){
                    this.setState({
                        secend:0,
                        min:this.state.min+1
                    })
                }
                if(this.state.min === 60){
                    this.setState(
                    {
                        min:0,
                        houres:this.state.houres+1
                    })
                }
                
            }, 1);
        }
    }
    stopinterval=()=>{
        clearInterval(interval);
        this.setState({
            isstart : false
        })
    }
    resetinterval=()=>{
        this.stopinterval()
        this.setState({
            houres:0,
            min : 0,
            secend :0,
                     
        })
    }

    handelsavetime=()=>{
        let h=this.state.houres;
        let m=this.state.min;
        let s=this.state.secend;
        let newTime=`   ${h>9 ? h : "0"+ h } : ${m>9 ? m : "0"+ m } : ${s>9 ? s : "0"+ s } `;
        
        this.context.setTimeArr([...this.context.timeArr,newTime])
    
    }


    render(){
        let h=this.state.houres;
        let m=this.state.min;
        let s=this.state.secend;

        return(
        <>
            <h1 className='time' onClick={this.handelsavetime}>
                {`   ${h>9 ? h : "0"+ h } : ${m>9 ? m : "0"+ m } : ${s>9 ? s : "0"+ s }   `}
            </h1>
            <div>
                <span className='butten' onClick={this.startinterval}>start</span>
                <span className='butten' onClick={this.stopinterval}>stop</span>
                <span className='butten' onClick={this.resetinterval}>reset</span>
            </div>
            <Timelist >
                {this.context.timeArr}
            </Timelist>
        </>
        )
    }
};
export default Timer;

