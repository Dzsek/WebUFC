
import RotaryEncoder from "../base/rotaryEncoder";
import styles from "./radioKnob.module.css"

export default class RadioKnob extends RotaryEncoder
{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className={styles.base}>
                <div className={styles.left} onMouseUp={this.decrement.bind(this)} onTouchEnd={this.decrementTouch.bind(this)}></div>
                <div className={styles.push} onTouchStart={super.touchPress.bind(this)} onTouchEnd={super.touchRelease.bind(this)} onMouseDown={super.press.bind(this)} onMouseUp={super.release.bind(this)}></div>
                <div className={styles.right} onMouseUp={this.increment.bind(this)} onTouchEnd={this.incrementTouch.bind(this)}></div>
                <div className={styles.art}>
                    <div></div>
                </div>
            </div>
        )
    }
}