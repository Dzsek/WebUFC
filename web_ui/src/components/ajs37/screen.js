import React from "react"
import styles from "./screen.module.css"

export default class Screen extends React.Component
{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={styles.backgroundPlate}>
                <div className={styles.screen}>
                    <span className={styles.number}>{this.props.text?.substr(0,1) ?? ' '}</span>
                    <span className={styles.number}>{this.props.text?.substr(1,1) ?? ' '}</span>
                    <span className={styles.number}>{this.props.text?.substr(2,1) ?? ' '}</span>
                    <span className={styles.number}>{this.props.text?.substr(3,1) ?? ' '}</span>
                    <span className={styles.number}>{this.props.text?.substr(4,1) ?? ' '}</span>
                    <span className={styles.number}>{this.props.text?.substr(5,1) ?? ' '}</span>
                </div>
            </div>
        )
    }    
}