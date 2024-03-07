import Button from "../base/button";
import styles from "./button_square.module.css"

export default class Button_Square extends Button
{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <button className={styles.button} onTouchStart={super.touchPress.bind(this)} onTouchEnd={super.touchRelease.bind(this)} onMouseDown={super.press.bind(this)} onMouseUp={super.release.bind(this)}>
                {this.props.topLabel != null ? <span className={styles.topLabel}>{this.props.topLabel}</span> : ""}
                {this.props.topLabel != null ? <br/> : ""}
                <span className={styles.normalLabel}>{this.props.label}</span>
                </button>
        )
    }
}