import styles from "./ck37.module.css"
import React from "react"
import Screen from "./screen";
import Button_Round from "./button_round";
import ModeDial from "./modeDial";
import InOutSwitch from "./inoutswitch";

const device_ck37 = 12;
const device_ck37_misc = 23;

export default class CK37 extends React.Component
{
    constructor(props){
        super(props);
    }
    
    render(){

        return (
            <div className={styles.main}>
                <div className={styles.base}>
                    <div className={styles.display}>
                        <Screen text={this.props.uiState.text}/>
                    </div>
                    <div className={styles.controls}>
                        <div className={styles.knob}>
                            <svg className={styles.labeling} viewBox='0 0 100 100'>
                                <path d="M 66 34 L 75 21 L 75 3 L 95 3 L 95 21 L 75 21" stroke="white" strokeWidth='0.8' fill='none'/>
                                <circle cx="66" cy="34" r='2' fill='white'/>
                                <text x='78' y='11' fill="white" fontFamily="monospace" fontSize="8">AKT</text>
                                <text x='78' y='19' fill="white" fontFamily="monospace" fontSize="8">POS</text>

                                <path d="M 50 27.5 L 50 23 L 40 21 L 63 21 M 40 21 L 39 21 L 39 12 L 57 12" stroke="white" strokeWidth='0.8' fill='none'/>
                                <circle cx="50" cy="27.5" r='2' fill='white'/>
                                <text x='42' y='11' fill="white" fontFamily="monospace" fontSize="8">REF</text>
                                <text x='41' y='19' fill="white" fontFamily="monospace" fontSize="8">LOLA</text>

                                <path d="M 37.8 30.5 L 30 18 L 30 2 M 30 18 L 2 18" stroke="white" strokeWidth='0.8' fill='none'/>
                                <circle cx="37.8" cy="30.5" r='2' fill='white'/>
                                <text x='9' y='8' fill="white" fontFamily="monospace" fontSize="8">BANA</text>
                                <text x='5' y='16' fill="white" fontFamily="monospace" fontSize="8">GRANS</text>

                                <path d="M 31 38 L 22 32 L 22 22 M 22 32 L 17 44 L 1 44" stroke="white" strokeWidth='0.8' fill='none'/>
                                <circle cx="31" cy="38" r='2' fill='white'/>
                                <text x='2' y='28' fill="white" fontFamily="monospace" fontSize="8">VIND</text>
                                <text x='2' y='35' fill="white" fontFamily="monospace" fontSize="8">RUTA</text>
                                <text x='2' y='42' fill="white" fontFamily="monospace" fontSize="8">MAL</text>

                                <path d="M 27.5 50 L 16 56 L 1 56" stroke="white" strokeWidth='0.8' fill='none'/>
                                <circle cx="27.5" cy="50" r='2' fill='white'/>
                                <text x='2' y='55' fill="white" fontFamily="monospace" fontSize="8">TID</text>

                                <path d="M 29.5 58.5 L 9 67 L 9 77 L 28 77" stroke="white" strokeWidth='0.8' fill='none'/>
                                <circle cx="29.5" cy="58.5" r='2' fill='white'/>
                                <text x='10' y='75' fill="white" fontFamily="monospace" fontSize="8">TAKT</text>

                                <path d="M 37 68.5 L 37 86 L 61 86" stroke="white" strokeWidth='0.8' fill='none'/>
                                <circle cx="37" cy="68.5" r='2' fill='white'/>
                                <text x='38' y='85' fill="white" fontFamily="monospace" fontSize="8">ID-NR</text>
                            </svg>
                            <div className={styles.dial}>
                                <ModeDial  
                                    step={0.1} 
                                    min={0.0} 
                                    max={0.6} 
                                    value={this.props.uiState.ckrotary} 
                                    valueMap={{
                                        '0.00': -145,
                                        '0.10': -113,
                                        '0.20': -90,
                                        '0.30': -58,
                                        '0.40': -31.5,
                                        '0.50': 0,
                                        '0.60': 45,
                                    }}
                                    device={device_ck37_misc} code={3009}/>
                            </div>
                        </div>
                        <div className={styles.inout}>
                            <span className={styles.label}>IN</span>
                            <InOutSwitch value={this.props.uiState.inout} device={device_ck37_misc} code={3008}/>
                            <span className={styles.label}>UT</span>
                        </div>
                        <div className={styles.keypad}>
                            <Button_Round label='7' device={device_ck37} code={3027}/>
                            <Button_Round label='8' device={device_ck37} code={3028}/>
                            <Button_Round label='9' device={device_ck37} code={3029}/>
                            <Button_Round label='4' device={device_ck37} code={3024}/>
                            <Button_Round label='5' device={device_ck37} code={3025}/>
                            <Button_Round label='6' device={device_ck37} code={3026}/>
                            <Button_Round label='1' device={device_ck37} code={3021}/>
                            <Button_Round label='2' device={device_ck37} code={3022}/>
                            <Button_Round label='3' device={device_ck37} code={3023}/>
                        </div>
                        <div className={styles.extrabuttons}>
                            <div>
                                <Button_Round label='0' style={3} device={device_ck37} code={3020}/>
                            </div>
                            <div>
                                <Button_Round label='RENSA' style={4} device={device_ck37_misc} code={3001}/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={styles.navkeys}>
                                
                        <div className={styles.b5}><Button_Round label='B5' style={2} device={device_ck37} code={3015}/></div>
                        <div className={styles.b6}><Button_Round label='B6' style={2} device={device_ck37} code={3016}/></div>
                        <div className={styles.b4}><Button_Round label='B4' style={2} device={device_ck37} code={3014}/></div>
                        <div className={styles.b7}><Button_Round label='B7' style={2} device={device_ck37} code={3017}/></div>
                        <div className={styles.b3}><Button_Round label='B3' style={2} device={device_ck37} code={3013}/></div>
                        <div className={styles.b8}><Button_Round label='B8' style={2} device={device_ck37} code={3018}/></div>
                        <div className={styles.b2}><Button_Round label='B2' style={2} device={device_ck37} code={3012}/></div>
                        <div className={styles.b9}><Button_Round label='B9' style={2} device={device_ck37} code={3019}/></div>
                        <div className={styles.b1}><Button_Round label='B1' style={2} device={device_ck37} code={3011}/></div>
                        <div className={styles.bx}><Button_Round label='BX' style={2} device={device_ck37} code={3010}/></div>
                        <div className={styles.bls}><Button_Round label={'LS\nSKU'} style={2} device={device_ck37} code={3009}/></div>
                        <div className={styles.bmal}><Button_Round label={'L\nMAL'} style={2} device={device_ck37} code={3008}/></div>
                        <div className={styles.divider1}></div>
                        <div className={styles.divider2}></div>
                </div>
            </div>
        )
    }
}