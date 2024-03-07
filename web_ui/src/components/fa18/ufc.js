import Screen from "./screen"
import React from "react"
import Button_Square from "./button_square";
import Button_Round from "./button_round";
import styles from "./ufc.module.css";
import RadioKnob from "./radioKnob";
import UpDownSwitch from "./updownswitch";

const device = 25;

export default class UFC extends React.Component
{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={styles.ufcContainer}> 
                <div className={styles.main}>
                    <div className={styles.radioDisplay}>
                        <div className={styles.ipbutton}>
                            <span>I/P</span>
                            <Button_Round device={device} code="3015"/>
                        </div>
                        <span className={styles.adfLabel}>ADF</span>
                        <div className={styles.adfButton}>
                            <div className={styles.adflabels}>
                                <span>1</span>
                                <span>OFF</span>
                                <span>2</span>
                            </div>
                            <UpDownSwitch value={this.props.uiState.adf_switch} device={device} code={3016}/>
                        </div>
                        <Screen text={this.props.uiState.com1}/>
                    </div>
                    <div className={styles.ufcDial}>
                        <div className={styles.scratchpad}>
                            <Screen text={this.props.uiState.scratchpad}/>
                        </div>
                        <div className={styles.ufcDialNumbers}>
                            <Button_Square device={device} code="3019" label="1" topLabel = ""/>
                            <Button_Square device={device} code="3020" label="2" topLabel = "N"/>
                            <Button_Square device={device} code="3021" label="3" topLabel = ""/>
                            <Button_Square device={device} code="3022" label="4" topLabel = "W"/>
                            <Button_Square device={device} code="3023" label="5" topLabel = ""/>
                            <Button_Square device={device} code="3024" label="6" topLabel = "E"/>
                            <Button_Square device={device} code="3025" label="7" topLabel = ""/>
                            <Button_Square device={device} code="3026" label="8" topLabel = "S"/>
                            <Button_Square device={device} code="3027" label="9" topLabel = ""/>
                            <Button_Square device={device} code="3028" label="CLR"/>
                            <Button_Square device={device} code="3018" label="0" topLabel = "-"/>
                            <Button_Square device={device} code="3029" label="ENT"/>
                        </div>
                    </div>
                    <div className={styles.ufcLabels}>
                        <Button_Round device={device} code="3010"/>
                        <Screen text={this.props.uiState.option1}/>
                        <Button_Round device={device} code="3011"/>
                        <Screen text={this.props.uiState.option2}/>
                        <Button_Round device={device} code="3012"/>
                        <Screen text={this.props.uiState.option3}/>
                        <Button_Round device={device} code="3013"/>
                        <Screen text={this.props.uiState.option4}/>
                        <Button_Round device={device} code="3014"/>
                        <Screen text={this.props.uiState.option5}/>
                    </div>
                    <div className={styles.radioDisplay}>
                        <Button_Square device={device} code="3017" label={'EM\nCON'}/>
                        <Screen text={this.props.uiState.com2}/> 
                    </div>
                </div> 
                <div className={styles.ufcBottomBar}>
                    <RadioKnob device={device} rotatecode={3033} pushcode={3008}/>
                    <Button_Square device={device} code="3001" label="A/P"/>
                    <Button_Square device={device} code="3002" label="IFF"/>
                    <Button_Square device={device} code="3003" label="TCN"/>
                    <Button_Square device={device} code="3004" label="ILS"/>
                    <Button_Square device={device} code="3005" label="D/L"/>
                    <Button_Square device={device} code="3006" label="BCN"/>
                    <Button_Square device={device} code="3007" topLabel={"ON\nOFF"}/>
                    <RadioKnob device={device} rotatecode={3034} pushcode={3009}/>
                </div>
            </div>
        )
    }
}