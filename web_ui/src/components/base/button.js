import React from "react"
import DataAccess from "@/businesslogic/DataAccess";

export default class Button extends React.Component
{
    constructor(props){
        super(props);
    }

    press(){
        DataAccess.sendCommand(this.props.device, this.props.code, 1);
    }

    release(){
        DataAccess.sendCommand(this.props.device, this.props.code, 0);
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

    render(){}
}