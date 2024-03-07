import Button from "../base/button";
import styles from "./button_round.module.css"

export default class Button_Round extends Button
{
    constructor(props){
        super(props);
    }
    
    render(){

        let bstyle = styles.base;
        let lstyle = styles.label;
        let cstyle = styles.circle;
        switch(this.props.style)
        {
            case 2:
                bstyle = styles.base2;
                lstyle = styles.label2;
                cstyle = styles.circle2;
                break;
            case 3:
                bstyle = styles.base3;
                lstyle = styles.label3;
                cstyle = styles.circle3;
                break;
            case 4:
                bstyle = styles.base4;
                lstyle = styles.label4;
                cstyle = styles.circle4;
                break;
            default:
                break;
        }

        return (
            <div className={`${bstyle}`}>
                <div className={`${cstyle}`}>
                    <button className={styles.button} onTouchStart={super.touchPress.bind(this)} onTouchEnd={super.touchRelease.bind(this)} onMouseDown={super.press.bind(this)} onMouseUp={super.release.bind(this)}>
                    </button>
                </div>
                <span className={`${lstyle}`}>
                    {this.props.label}
                </span>
            </div>
        )
    }
}