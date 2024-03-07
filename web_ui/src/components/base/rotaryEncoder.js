import React from "react"
import DataAccess from "@/businesslogic/DataAccess";

export default class RotaryEncoder extends React.Component
{
    constructor(props){
        super(props);
    }

    increment(){
        DataAccess.sendCommand(this.props.device, this.props.rotatecode, 1);
    }

    decrement(){
        DataAccess.sendCommand(this.props.device, this.props.rotatecode, -1);
    }

    press(){
        DataAccess.sendCommand(this.props.device, this.props.pushcode, 1);
    }

    release(){
        DataAccess.sendCommand(this.props.device, this.props.pushcode, 0);
    }

    touchPress(e){
        e.preventDefault()
        e.stopPropagation()
        this.press();
    }

    touchRelease(e){
        e.preventDefault()
        e.stopPropagation()
        this.release();
    }

    incrementTouch(e){
        e.preventDefault()
        e.stopPropagation()
        this.increment();
    }
    
    decrementTouch(e){
        e.preventDefault()
        e.stopPropagation()
        this.decrement();
    }

    render(){}
}