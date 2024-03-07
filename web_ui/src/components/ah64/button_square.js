import Button from "../base/button";
import styles from "./button_square.module.css"

export default class Button_Square extends Button
{
    constructor(props){
        super(props);
    }
    
    render(){

        return (
            <button style={{ gridColumnStart: `${this.props.gridStart ?? 'initial'}`, gridColumnEnd: `${this.props.gridEnd ?? 'initial'}`}} className={`${styles.button} ${this.props.isLarge ? styles.doubleWidth : styles.singleWidth}`} onTouchStart={super.touchPress.bind(this)} onTouchEnd={super.touchRelease.bind(this)} onMouseDown={super.press.bind(this)} onMouseUp={super.release.bind(this)}>
                <div className={`${this.props.showBorder ? styles.border : ''}`}>
                    <span style={{ fontSize: `${this.props.labelsize ?? ''}`}} className={`${styles.normalLabel} `}>{this.props.label}</span>
                </div>
            </button>
        )
    }
}