import Button from "../base/button";
import styles from "./button_round.module.css"

export default class Button_Round extends Button
{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <button className={styles.button} onTouchStart={super.touchPress.bind(this)} onTouchEnd={super.touchRelease.bind(this)} onMouseDown={super.press.bind(this)} onMouseUp={super.release.bind(this)}>
                <div className={styles.circle}></div>
            </button>
        )
    }
}