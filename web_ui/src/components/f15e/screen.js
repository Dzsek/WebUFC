import React from "react"
import styles from "./screen.module.css"

export default class Screen extends React.Component
{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={`${styles.backgroundPlate} ${this.props.altBGStyle ? styles.backgroundPlateAlt : ''}`}>
                <div className={`${styles.baseLabel} ${this.props.altLabelStyle? styles.baseLabelAlt : ''}`}>
                    <span className={styles.leftLabel}>{this.props.leftText}</span>
                    <span className={`${styles.centerLabel} ${this.props.forceCenter ? styles.forceCenter : ''}`}>{this.props.centerText}</span>
                    <span className={styles.rightLabel}>{this.props.rightText}</span>
                </div>
            </div>
        )
    }    
}