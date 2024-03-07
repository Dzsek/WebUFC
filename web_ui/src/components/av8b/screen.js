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
                <div className={styles.greenLabel}>
                    <span className={styles.leftLabel}>{this.props.leftText}</span>
                    <span className={styles.rightLabel}>{this.props.text}</span>
                </div>
            </div>
        )
    }    
}