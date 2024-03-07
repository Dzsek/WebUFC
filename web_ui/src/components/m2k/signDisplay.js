import styles from "./signDisplay.module.css"
import React from "react"

export default class SignDisplay extends React.Component
{
    constructor(props){
        super(props);
    }
    
    render(){

        return (
            <div className={styles.container}>
                <span>{this.props.topLeft}</span>
                <span>{this.props.topRight}</span>
                <span>{this.props.bottomLeft}</span>
                <span>{this.props.bottomRight}</span>
            </div>
        )
    }
}