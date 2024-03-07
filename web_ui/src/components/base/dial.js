import React from "react"
import DataAccess from "@/businesslogic/DataAccess";

export default class Dial extends React.Component
{
    constructor(props){
        super(props);
    }

    increment(){
        let newVal = Number(this.props.value)
        if(newVal == null || newVal == undefined)
        {
            newVal = this.props.min
        }

        newVal = newVal + this.props.step
        if(newVal > this.props.max){
            newVal = this.props.loop ? this.props.min : Math.min(this.props.max, newVal)
        }

        DataAccess.sendCommand(this.props.device, this.props.code, newVal.toFixed(2));
    }

    decrement(){
        let newVal = Number(this.props.value)
        if(newVal == null || newVal == undefined)
        {
            newVal = this.props.max
        }

        newVal = newVal - this.props.step
        if(newVal < this.props.min){
            newVal = this.props.loop ? this.props.max : Math.max(this.props.min, newVal)
        }

        DataAccess.sendCommand(this.props.device, this.props.code, newVal.toFixed(2));
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