import Switch2Pos from "../base/switch2pos";
import styles from "./updownswitch.module.css";

export default class UpDownSwitch extends Switch2Pos {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={styles.base}>
                <div className={`${styles.art} ${this.props.value == '0.00' ? styles.tobottom : ''}`}>
                    <div></div>
                </div>
                <div className={styles.upinteraction} onMouseUp={this.pos1.bind(this)} onTouchEnd={this.pos1.bind(this)}></div>
                <div className={styles.downinteraction} onMouseUp={this.pos2.bind(this)} onTouchEnd={this.pos2.bind(this)}></div>
            </div>
        )        
    }
}