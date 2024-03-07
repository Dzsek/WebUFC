import React from "react"
import styles from "./ufc.module.css";
import Screen from "./screen";
import Keypad from "./keypad";
import Button_Square from "./button_square";
import Button_Round from "./button_round";
import RadioKnob from "./radioKnob";
import Knob from "../base/knob";

const device_ufc = 23;
const device_odu = 24;

export default class UFC extends React.Component
{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={styles.baseGrid}>
                <div className={styles.odu}>
                    <div></div>
                    <div>
                        <Button_Round device={device_odu} code={3250}/>
                        <Screen leftText={this.props.uiState.odu1} />
                    </div>
                    <div>
                        <Button_Round device={device_odu} code={3248}/>
                        <Screen leftText={this.props.uiState.odu4} />
                    </div>
                    <div>
                        <Button_Round device={device_odu} code={3251}/>
                        <Screen leftText={this.props.uiState.odu2} />
                    </div>
                    <div>
                        <Button_Round device={device_odu} code={3249}/>
                        <Screen leftText={this.props.uiState.odu5} />
                    </div>
                    <div>
                        <Button_Round device={device_odu} code={3252}/>
                        <Screen leftText={this.props.uiState.odu3} />
                    </div>
                </div>
                <div className={styles.ufc}> 
                    <div className={styles.scratchpad} style={{gridColumnStart: 2, gridColumnEnd:3}}>
                        <Screen text={this.props.uiState.scratchpad_right} leftText={this.props.uiState.scratchpad_left} />
                    </div>
                    <div style={{gridColumnStart: 2, gridColumnEnd:3}}>
                        <Keypad />
                    </div>
                    <div className={styles.leftStack}>
                        <Button_Square label='TMR' device={device_ufc} code={3294}/>
                        <Button_Square label='TOO' device={device_ufc} code={3296}/>
                        <div></div>
                        <div className={styles.comScreen}>
                            <Screen text={this.props.uiState.com1} />
                        </div>
                        <div>
                            <RadioKnob device={device_ufc} rotatecode={3300} pushcode={3178}/>
                        </div>
                    </div>
                    <div className={styles.rightStack}>
                        <div></div>
                        <div className={styles.ipbutton}>
                            <span className={`${styles.labels} ${styles.iplabel}`}>I/P</span>
                            <Button_Round device={device_ufc} code={3297}/>
                        </div>
                        <div>
                        </div>
                        <div className={styles.comScreen}>
                            <Screen text={this.props.uiState.com2} />
                        </div>
                            <RadioKnob device={device_ufc} rotatecode={3301} pushcode={3179}/>
                    </div>
                </div>
            </div>
        )
    }
}