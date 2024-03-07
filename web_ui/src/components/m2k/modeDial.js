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
                <div className={styles.knob} >
                    <div>
                        <div>
                        
                        </div>
                    </div>
                </div>
                <div className={styles.increment} onMouseUp={this.increment.bind(this)} onTouchEnd={this.incrementTouch.bind(this)}></div>
                <div className={styles.decrement} onMouseUp={this.decrement.bind(this)}  onTouchEnd={this.decrementTouch.bind(this)}></div>
            </div>
        )
    }
}