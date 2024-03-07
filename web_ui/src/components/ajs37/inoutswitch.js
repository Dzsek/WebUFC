import Switch2Pos from "../base/switch2pos";
import styles from "./inoutswitch.module.css";

export default class InOutSwitch extends Switch2Pos {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={styles.base}>
                <div className={`${styles.art} ${this.props.value == '0.00' ? styles.toright : ''}`}>
                    <div></div>
                </div>
                <div className={styles.leftinteraction} onMouseUp={this.pos1.bind(this)} onTouchEnd={this.pos1Touch.bind(this)}></div>
                <div className={styles.rightinteraction} onMouseUp={this.pos2.bind(this)} onTouchEnd={this.pos2Touch.bind(this)}></div>
            </div>
        )        
    }
}