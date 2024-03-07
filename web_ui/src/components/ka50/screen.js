import React from "react"
import styles from "./screen.module.css"

export default class Screen extends React.Component
{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={styles.main}>
                <span className={styles.sign}>{this.props.sign}</span>
                <span className={styles.scratchpad}>{this.props.text}</span>
                <span className={styles.number}>{this.props.number}</span>
            </div>
        )
    }    
}