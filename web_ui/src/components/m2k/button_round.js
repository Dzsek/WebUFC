import Button from "../base/button";
import styles from "./button_round.module.css"

export default class Button_Round extends Button
{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <button className={`${styles.button} ${this.props.glow > 0 ? styles.glow : ''}`} onTouchStart={super.touchPress.bind(this)} onTouchEnd={super.touchRelease.bind(this)} onMouseDown={super.press.bind(this)} onMouseUp={super.release.bind(this)}>
                {this.props.topLabel != null ? <span className={styles.topLabel}>{this.props.topLabel}</span> : ""}
                {this.props.topLabel != null ? <br/> : ""}
                <span className={styles.normalLabel}>{this.props.label}</span>
                </button>
        )
    }
}