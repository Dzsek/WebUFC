import styles from "./pcn.module.css"
import React from "react"
import SegmentDisplay from "./segmentDisplay";
import SignDisplay from "./signDisplay";
import Indicators from "./indicators";
import Button_Square from "./button_square";
import Button_Round from "./button_round";
import Button_M2K from "./button_m2k";
import ModeDial from "./modeDial";

const pcn = 9;

export default class PCN extends React.Component
{
    constructor(props){
        super(props);
    }
    
    render(){

        return (
            <div className={styles.base}>
                <div className={styles.displays}>
                    <div className={styles.topbar}>
                        <SignDisplay topLeft={this.props.uiState.north} topRight={this.props.uiState.ulplus} bottomLeft={this.props.uiState.south} bottomRight={this.props.uiState.ulminus}/>
                        <SegmentDisplay segments={5} value={this.props.uiState.upperLeft} decimals={this.props.uiState.upperLeftDec}/>
                        <div></div>
                        <SignDisplay topLeft={this.props.uiState.east} topRight={this.props.uiState.urplus} bottomLeft={this.props.uiState.west} bottomRight={this.props.uiState.urminus}/>
                        <SegmentDisplay  segments={6} value={this.props.uiState.upperRight} decimals={this.props.uiState.upperRightDec}/>
                    </div>
                    <div className={styles.bottombar}>
                        <SegmentDisplay  segments={2} value={this.props.uiState.bottomLeft} />
                        <div style={{display:'flex', justifyContent:'flex-end'}}>
                            <SegmentDisplay  segments={2} value={this.props.uiState.bottomRight} />
                        </div>
                        <div style={{alignSelf:'flex-end'}}>
                            <Indicators uiState={this.props.uiState}/>
                        </div>
                    </div>
                </div>
                <div className={styles.controls}>
                    <div className={styles.misc}>
                        <div className={styles.prepdest}>
                            <div>
                                <p className={styles.verticalLabel}>PREP</p>
                                <Button_Square label={'PREP'} yellow={true} light={this.props.uiState.prep} device={pcn} code={3570}/>
                            </div>
                            <div>
                                <p className={styles.verticalLabel}>DEST</p>
                                <Button_Square label={'DEST'} yellow={true} light={this.props.uiState.dest} device={pcn} code={3572}/>
                            </div>
                        </div>
                        <div className={styles.knob}>
                            <span style={{gridColumn:'2', gridRow:'1', marginBottom:'-2.5rem'}}>RD/TD</span>
                            <span style={{gridColumn:'1', gridRow:'2', marginRight: '-13rem', marginBottom:'-2rem'}}>L/G</span>
                            <span style={{gridColumn:'1', gridRow:'3', marginRight: '-7rem'}}>ALT</span>
                            <span style={{gridColumn:'1', gridRow:'4', marginRight: '-1.5rem', marginTop:'-1rem'}}>CP/PD</span>
                            <span style={{gridColumn:'1', gridRow:'5', marginRight: '-2rem', marginTop:'-1.5rem'}}>D/RLT</span>
                            <span style={{gridColumn:'1', gridRow:'6', marginRight: '-10rem', marginTop:'-3.5rem'}}>TR/VS</span>
                            <span style={{gridColumn:'2', gridRow:'7', marginTop: '-2.5rem'}}>DV/FV</span>
                            <span style={{gridColumn:'3', gridRow:'6', marginLeft: '-6rem', marginTop:'-3.5rem'}}>DEC</span>
                            <span style={{gridColumn:'3', gridRow:'4', marginLeft: '-3rem', marginTop:'-1.0rem'}}>ρ/θ</span>
                            <span style={{gridColumn:'3', gridRow:'3', marginLeft: '-2rem'}}>ΔALT</span>
                            <span style={{gridColumn:'3', gridRow:'2', marginLeft: '-8rem', marginBottom:'-2rem'}}>ΔL/ΔG</span>
                            <div className={styles.knob_proper}>
                                <ModeDial 
                                    step={0.1} 
                                    min={0.0} 
                                    max={1.0} 
                                    loop={true} 
                                    value={this.props.uiState.ins_param} 
                                    valueMap={{
                                        '0.00': -140,
                                        '0.10': -120,
                                        '0.20': -90,
                                        '0.30': -60,
                                        '0.40': -35,
                                        '0.50': 0,
                                        '0.60': 40,
                                        '0.70': 65,
                                        '0.80': 90,
                                        '0.90': 135,
                                        '1.00': -180,
                                    }}
                                    device={pcn} code={3574}/>
                            </div>
                        </div>
                        <div className={styles.lightbuttons}>
                            <div></div><Button_M2K label='BAD' light={this.props.uiState.bad_g} device={pcn} code={3576}/>
                            <div></div><Button_M2K label='REC' light={this.props.uiState.rec_g} device={pcn} code={3578}/>
                            <Button_M2K label='VAL' light={this.props.uiState.val_g} device={pcn} code={3580}/>
                            <Button_M2K label='MRQ' light={this.props.uiState.mrq_g} device={pcn} code={3582}/>
                        </div>
                    </div>
                    <div className={styles.keypad}>
                        <Button_Square label={'+\n1'} device={pcn} code={3584}/>
                        <Button_Square label={'N\n2'} device={pcn} code={3585}/>
                        <Button_Square label={'+\n3'} device={pcn} code={3586}/>
                        <Button_Square label={'W\n4'} device={pcn} code={3587}/>
                        <Button_Square label={'5'} device={pcn} code={3588}/>
                        <Button_Square label={'E\n6'} device={pcn} code={3589}/>
                        <Button_Square label={'7\n-'} device={pcn} code={3590}/>
                        <Button_Square label={'8\nS'} device={pcn} code={3591}/>
                        <Button_Square label={'9\n-'} device={pcn} code={3592}/>
                        <Button_Round label={'EFF'} glow={this.props.uiState.eff} device={pcn} code={3594}/>
                        <Button_Square label={'0'} device={pcn} code={3593}/>
                        <Button_Round label={'INS'} glow={this.props.uiState.ins} device={pcn} code={3596}/>
                    </div>
                </div>
            </div>
        )
    }
}