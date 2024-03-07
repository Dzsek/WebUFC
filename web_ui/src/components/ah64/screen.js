import React from "react"
import styles from "./screen.module.css"

export default class Screen extends React.Component
{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <span className={styles.greenLabel}>{this.props.text}</span>
        )
    }    
}