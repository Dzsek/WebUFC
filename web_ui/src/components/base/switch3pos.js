import React from "react"
import DataAccess from "@/businesslogic/DataAccess";

export default class Switch3Pos extends React.Component
{
    constructor(props){
        super(props);
    }

    pos1(){
        DataAccess.sendCommand(this.props.device, this.props.code, 1);
    }

    pos2(){
        DataAccess.sendCommand(this.props.device, this.props.code, 0);
    }

    pos3(){
        DataAccess.sendCommand(this.props.device, this.props.code, -1);
    }

    pos1Touch(e){
        e.preventDefault()
        e.stopPropagation()
        this.pos1();
    }

    pos2Touch(e){
        e.preventDefault()
        e.stopPropagation()
        this.pos2();
    }

    pos3Touch(e){
        e.preventDefault()
        e.stopPropagation()
        this.pos3();
    }

    render(){}
}