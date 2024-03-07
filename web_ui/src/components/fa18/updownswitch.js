import Switch3Pos from "../base/switch3pos";
import styles from "./updownswitch.module.css";

export default class UpDownSwitch extends Switch3Pos {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={styles.base}>
                <div className={`${styles.art} ${this.props.value == '-1.00' ? styles.tobottom : (this.props.value=='1.00' ? styles.totop : '')}`}>
                    <div></div>
                </div>
                <div className={styles.upinteraction} onMouseUp={this.pos1.bind(this)} onTouchEnd={this.pos1.bind(this)}></div>
                <div className={styles.midinteraction} onMouseUp={this.pos2.bind(this)} onTouchEnd={this.pos2.bind(this)}></div>
                <div className={styles.downinteraction} onMouseUp={this.pos3.bind(this)} onTouchEnd={this.pos3.bind(this)}></div>
            </div>
        )        
    }
}