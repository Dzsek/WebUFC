import React from "react"
import styles from "./pvi.module.css"
import Screen from "./screen";
import Button_Square from "./button_square";
import ModeDial from "./modeDial";
import UpDownSwitch from "./updownswitch";

const device_pvi = 20;
const device_dlink = 25;

export default class PVI extends React.Component
{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={styles.main}>
                <div className={styles.displays}>
                    <Screen sign={this.props.uiState.top_sign} text={this.props.uiState.top_scratchpad} number={this.props.uiState.top_num}/>
                    <span className={styles.displaylabel}>WP</span>
                    <Screen sign={this.props.uiState.bottom_sign} text={this.props.uiState.bottom_scratchpad} number={this.props.uiState.bottom_num}/>
                    <span className={styles.displaylabel}>POI</span>
                </div>
                <div className={styles.keypad}>
                    <Button_Square label={'WPT'} light={this.props.uiState.wpt} style={1} device={device_pvi} code={3011}/>
                    <Button_Square label={'-\n1'} style={2} device={device_pvi} code={3002}/>
                    <Button_Square label={'2'} style={2} device={device_pvi} code={3003}/>
                    <Button_Square label={'3'} style={2} device={device_pvi} code={3004}/>
                    <Button_Square label={'INU\nRESET'} light={this.props.uiState.inu_reset} style={1} device={device_pvi} code={3012}/>
                    <Button_Square label={'FIX\nPNT'} light={this.props.uiState.fixpnt} style={1} device={device_pvi} code={3013}/>
                    <Button_Square label={'4'} style={2} device={device_pvi} code={3005}/>
                    <Button_Square label={'5'} style={2} device={device_pvi} code={3006}/>
                    <Button_Square label={'6'} style={2} device={device_pvi} code={3007}/>
                    <Button_Square label={'INU\nPREC'} light={this.props.uiState.inu_prec} style={1} device={device_pvi} code={3014}/>
                    <Button_Square label={'AIR\nFIELD'} light={this.props.uiState.airfld} style={1} device={device_pvi} code={3015}/>
                    <Button_Square label={'7'} style={2} device={device_pvi} code={3008}/>
                    <Button_Square label={'8'} style={2} device={device_pvi} code={3009}/>
                    <Button_Square label={'9'} style={2} device={device_pvi} code={3010}/>
                    <Button_Square label={'INU\nNORM'} light={this.props.uiState.inu_norm} style={1} device={device_pvi} code={3016}/>
                    <Button_Square label={'NAV\nTGT'} light={this.props.uiState.navtgt} style={1} device={device_pvi} code={3017}/>
                    <Button_Square label={'ENTER'} light={this.props.uiState.enter} style={3} device={device_pvi} code={3018}/>
                    <Button_Square label={'+\n0'} style={2} device={device_pvi} code={3001}/>
                    <Button_Square label={'CLEAR'} light={this.props.uiState.clear} style={3} device={device_pvi} code={3019}/>
                    <Button_Square label={'INIT\nPNT'} light={this.props.uiState.init_pnt} style={1} device={device_pvi} code={3020}/>
                    <Button_Square label={'SELF\nCOOR'} light={this.props.uiState.selfcoor} style={1} device={device_pvi} code={3021}/>
                    <Button_Square label={'DTA\nDH'} light={this.props.uiState.dtadh} style={1} device={device_pvi} code={3022}/>
                    <Button_Square label={'WIND\nDI/SP'} light={this.props.uiState.winddisp} style={1} device={device_pvi} code={3023}/>
                    <Button_Square label={'T-HDG\nTM/DS'} light={this.props.uiState.thead} style={1} device={device_pvi} code={3024}/>
                    <Button_Square label={'BR/RA\nTG PT'} light={this.props.uiState.brgra} style={1} device={device_pvi} code={3025}/>
                </div>
                <div className={styles.misc}>
                    <div className={styles.modeknob}>
                        <span className={styles.lbloff} >OFF</span>
                        <span className={styles.lblcheck}>CHECK</span>
                        <span className={styles.lblent}>ENT</span>
                        <span className={styles.lbloper}>OPER</span>
                        <span className={styles.lblstm}>STM</span>
                        <span className={styles.lblk1}>K-1</span>
                        <span className={styles.lblk2}>K-2</span>
                        <div style={{gridRow:'2', gridColumn:'2'}}>
                            <ModeDial 
                                step={0.1} 
                                min={0.0} 
                                max={0.6} 
                                loop={false} 
                                value={this.props.uiState.mode}
                                valueMap={{
                                    '0.00': -90,
                                    '0.10': -60,
                                    '0.20': -35,
                                    '0.30': 0,
                                    '0.40': 35,
                                    '0.50': 60,
                                    '0.60': 90,
                                }}
                                device={device_pvi} code={3026}/>
                        </div>
                    </div>
                    <div className={styles.switch}>
                        <span>I-251V</span>
                        <UpDownSwitch value={this.props.uiState.source} device={device_pvi} code={3028}/>
                        <span>OVER</span>
                    </div>
                    <div className={styles.switch}>
                        <span>DL</span>
                        <UpDownSwitch value={this.props.uiState.dl} device={device_dlink} code={3016}/>
                        <span>OFF</span>
                    </div>
                </div>
            </div>
        )
    }
}