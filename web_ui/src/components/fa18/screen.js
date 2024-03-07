import React from "react"
import styles from "./screen.module.css"

export default class Screen extends React.Component
{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={styles.panel}>
                <span className={styles.greenLabel}>{this.props.text}</span>
            </div>
        )
    }    
}