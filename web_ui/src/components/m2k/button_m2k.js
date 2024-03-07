import Button from "../base/button";
import styles from "./button_m2k.module.css"

export default class Button_M2K extends Button
{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <button className={styles.button} onTouchStart={super.touchPress.bind(this)} onTouchEnd={super.touchRelease.bind(this)} onMouseDown={super.press.bind(this)} onMouseUp={super.release.bind(this)}>
                <div className={styles.content}>
                    <div className={`${styles.light} ${this.props.light > 0 ? styles.on : ''}`}></div>
                    <div className={styles.normalLabel}>{this.props.label}</div>
                </div>
            </button>
        )
    }
}