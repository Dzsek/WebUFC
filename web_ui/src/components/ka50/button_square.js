import Button from "../base/button";
import styles from "./button_square.module.css"

export default class Button_Square extends Button
{
    constructor(props){
        super(props);
    }
    
    render(){

        const light = <div className={`${this.props.style=='1' ? styles.light : styles.light2} ${this.props.light == 0.1 || this.props.light >= 0.3 ? (this.props.style=='1' ? styles.on : styles.on2) : ''}`}></div>

        return (
            <button className={styles.button} onTouchStart={super.touchPress.bind(this)} onTouchEnd={super.touchRelease.bind(this)} onMouseDown={super.press.bind(this)} onMouseUp={super.release.bind(this)}>
                <div className={`${this.props.style == '2' ? styles.content2 : styles.content}`}>
                    <div className={`${this.props.style == '2' ? styles.largeLabel : styles.normalLabel}`}>
                        {this.props.label}
                    </div>
                    {this.props.style == '2' ? '' : light}
                </div>
            </button>
        )
    }
}