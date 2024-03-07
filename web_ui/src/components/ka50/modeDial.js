import React from "react"
import Dial from "../base/dial";
import styles from "./modeDial.module.css";

export default class ModeDial extends Dial
{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={styles.base} style={{transform: 'rotate('+this.props.valueMap[this.props.value]+'deg)'}}>
                <svg className={styles.extraart} viewBox='0 0 100 100'>
                    <path d="M 50 10 L 60 60 L 60 95 L 40 95 L 40 60 L 50 10" stroke="white" strokeWidth='2' fill='white'/>
                    <circle cx="50" cy="49.5" r='26' fill='white'/>
                </svg>
                <div className={styles.knob}>
                    <div className={styles.pointer}>
                    </div>
                    
                    <div className={styles.circle}>
                    </div>
                </div>
                <div className={styles.increment} onMouseUp={this.increment.bind(this)} onTouchEnd={this.incrementTouch.bind(this)}></div>
                <div className={styles.decrement} onMouseUp={this.decrement.bind(this)} onTouchEnd={this.decrementTouch.bind(this)}></div>
            </div>
        )
    }
}